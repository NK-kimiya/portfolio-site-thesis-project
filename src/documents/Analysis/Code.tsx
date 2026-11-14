"use client";
import { useState } from "react";
const rCode = String.raw`
# ==========================================
# 13. 4変数のSHAP依存性プロットを作成・保存
# ==========================================

library(ggplot2)
library(dplyr)

# グラフを作成する4変数
plot_features <- c(
  "DEPFREQ_A",
  "ANXFREQ_A",
  "LONELY_A",
  "FGEFRQTRD_A"
)

# 保存先フォルダの作成
output_dir <- file.path(
  getwd(), "SHAP_dependence_plots"
)
dir.create(output_dir, showWarnings = FALSE,
           recursive = TRUE)

# テストデータの変数値とSHAP値を結合
plot_data_list <- lapply(plot_features, function(v) {
  data.frame(
    Feature = v,
    Value = as.numeric(test_data[[v]]),
    SHAP = as.numeric(shap_original[, v])
  )
})

plot_data <- bind_rows(plot_data_list)

# 各変数値における平均SHAP値
mean_data <- plot_data %>%
  group_by(Feature, Value) %>%
  summarise(
    MeanSHAP = mean(SHAP),
    N = n(),
    .groups = "drop"
  )

# ==========================================
# 14. 変数ごとのグラフを保存
# ==========================================

for (v in plot_features) {
  
  dat_v <- plot_data %>%
    filter(Feature == v)
  
  mean_v <- mean_data %>%
    filter(Feature == v)
  
  p <- ggplot(
    dat_v,
    aes(x = Value, y = SHAP)
  ) +
    
    # SHAP = 0 の基準線
    geom_hline(
      yintercept = 0,
      linetype = "dashed",
      color = "gray50"
    ) +
    
    # 各対象者のSHAP値
    geom_jitter(
      width = 0.12,
      height = 0,
      alpha = 0.25,
      color = "steelblue",
      size = 1
    ) +
    
    # 各変数値の平均SHAP値
    geom_line(
      data = mean_v,
      aes(x = Value, y = MeanSHAP),
      inherit.aes = FALSE,
      color = "red",
      linewidth = 0.8
    ) +
    
    geom_point(
      data = mean_v,
      aes(x = Value, y = MeanSHAP),
      inherit.aes = FALSE,
      color = "red",
      size = 2.5
    ) +
    
    scale_x_continuous(
      breaks = sort(unique(dat_v$Value))
    ) +
    
    labs(
      title = paste("SHAP dependence:", v),
      x = paste(v, "(前処理後の値)"),
      y = "SHAP value"
    ) +
    
    theme_bw(base_size = 13)
  
  # PNG形式で保存
  ggsave(
    filename = file.path(
      output_dir,
      paste0("SHAP_", v, ".png")
    ),
    plot = p,
    width = 7,
    height = 5,
    dpi = 300
  )
}

# ==========================================
# 15. 4変数を1枚のグラフにまとめる
# ==========================================

p_all <- ggplot(
  plot_data,
  aes(x = Value, y = SHAP)
) +
  geom_hline(
    yintercept = 0,
    linetype = "dashed",
    color = "gray50"
  ) +
  geom_jitter(
    width = 0.12,
    height = 0,
    alpha = 0.20,
    color = "steelblue",
    size = 0.8
  ) +
  geom_line(
    data = mean_data,
    aes(x = Value, y = MeanSHAP,
        group = Feature),
    inherit.aes = FALSE,
    color = "red",
    linewidth = 0.8
  ) +
  geom_point(
    data = mean_data,
    aes(x = Value, y = MeanSHAP),
    inherit.aes = FALSE,
    color = "red",
    size = 2
  ) +
  facet_wrap(
    ~ Feature,
    ncol = 2,
    scales = "free_y"
  ) +
  scale_x_continuous(breaks = 1:5) +
  labs(
    title = "SHAP dependence plots",
    x = "Feature value",
    y = "SHAP value"
  ) +
  theme_bw(base_size = 12)

ggsave(
  filename = file.path(
    output_dir, "SHAP_4variables.png"
  ),
  plot = p_all,
  width = 12,
  height = 8,
  dpi = 300
)

# 各変数値の平均SHAP値をCSV保存
write.csv(
  mean_data,
  file = file.path(
    output_dir, "SHAP_mean_by_value.csv"
  ),
  row.names = FALSE
)

# グラフ表示
print(p_all)

cat("保存先:", output_dir, "\n")

`;

const rCodeInteraction = String.raw`
# ==========================================
# 16. SHAP相互作用値の計算とCSV保存
# ==========================================

# 保存フォルダ
interaction_dir <- file.path(
  getwd(), "SHAP_interactions"
)
dir.create(interaction_dir, showWarnings = FALSE,
           recursive = TRUE)

# SHAP相互作用値を計算
shap_interactions <- predict(
  xgb_final,
  newdata = X_test,
  predinteraction = TRUE
)

# 配列の形状を確認
n_encoded <- ncol(X_test)
stopifnot(length(dim(shap_interactions)) == 3L)
stopifnot(all(dim(shap_interactions) ==
                c(nrow(X_test),
                  n_encoded + 1L,
                  n_encoded + 1L)))

# ダミー変数と元の変数の対応を揃える
feature_map <- feature_map[
  match(colnames(X_test),
        feature_map$encoded_feature),
  , drop = FALSE
]

if (anyNA(feature_map$encoded_feature)) {
  stop("説明変数の対応を確認してください")
}

# 元の説明変数単位で相互作用を集計
pair_results <- list()
k <- 0L

for (i in seq_len(length(features_cols) - 1L)) {
  
  v1 <- features_cols[i]
  idx1 <- which(feature_map$original_feature == v1)
  
  for (j in (i + 1L):length(features_cols)) {
    
    v2 <- features_cols[j]
    idx2 <- which(feature_map$original_feature == v2)
    
    # 各対象者の相互作用SHAP値
    each_person <- numeric(nrow(X_test))
    
    for (a in idx1) {
      for (b in idx2) {
        each_person <- each_person +
          shap_interactions[, a, b]
      }
    }
    
    k <- k + 1L
    
    pair_results[[k]] <- data.frame(
      Feature1 = v1,
      Feature2 = v2,
      MeanAbsSHAPInteraction = mean(abs(each_person)),
      MeanSHAPInteraction = mean(each_person)
    )
  }
}

# 相互作用が強い順に整理
interaction_pairs <- do.call(rbind, pair_results)

interaction_pairs <- interaction_pairs[
  order(-interaction_pairs$MeanAbsSHAPInteraction),
  , drop = FALSE
]

rownames(interaction_pairs) <- NULL

# ==========================================
# 17. 組み合わせ別CSV保存
# ==========================================

write.csv(
  interaction_pairs,
  file = file.path(
    interaction_dir,
    "SHAP_interaction_pairs.csv"
  ),
  row.names = FALSE
)

# ==========================================
# 18. 上三角行列をCSV保存
# ==========================================

interaction_matrix <- matrix(
  NA_real_,
  nrow = length(features_cols),
  ncol = length(features_cols),
  dimnames = list(features_cols, features_cols)
)

for (r in seq_len(nrow(interaction_pairs))) {
  
  interaction_matrix[
    interaction_pairs$Feature1[r],
    interaction_pairs$Feature2[r]
  ] <- interaction_pairs$MeanAbsSHAPInteraction[r]
}

write.csv(
  interaction_matrix,
  file = file.path(
    interaction_dir,
    "SHAP_interaction_upper_triangle.csv"
  ),
  na = ""
)

# 結果表示
cat("\n===== SHAP相互作用 上位10組 =====\n")
print(head(interaction_pairs, 10))

cat("保存先:", interaction_dir, "\n")
`;
const Code = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <p>xgboost/learning.R(スクリプトの中心部分)</p>
      <button
        className="bg-[#F0F1FC] p-2 shadow-md mb-2"
        type="button"
        aria-expanded={isOpen}
        aria-controls="preprocessing-code"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "コードを閉じる" : "コードを表示"}
      </button>
      {isOpen && (
        <pre className="overflow-x-auto rounded bg-[#1B2340] p-4 text-sm text-white">
          <code>{rCode}</code>
        </pre>
      )}
    </>
  );
};

export const CodeInteraction = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <p>xgboost/learning.R(スクリプトの中心部分)</p>
      <button
        className="bg-[#F0F1FC] p-2 shadow-md mb-2"
        type="button"
        aria-expanded={isOpen}
        aria-controls="preprocessing-code"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "コードを閉じる" : "コードを表示"}
      </button>

      {isOpen && (
        <pre className="overflow-x-auto rounded bg-[#1B2340] p-4 text-sm text-white">
          <code>{rCodeInteraction}</code>
        </pre>
      )}
    </>
  );
};

export default Code;
