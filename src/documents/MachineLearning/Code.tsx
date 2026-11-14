"use client";
import { useState } from "react";
const rCode = String.raw`
#==========================
# 訓練データとテストデータの分割
# 層化ランダム分割（8:2）
#==========================
#install.packages("caret")
library(caret)

# 乱数シードを固定（再現性の確保）
set.seed(123)

# 目的変数を基準に層化ランダム分割
train_index <- createDataPartition(
  y = as.factor(df_selected$K6SPD_A),
  p = 0.8,
  list = FALSE
)

# 訓練データ（80%）
train_data <- df_selected[train_index, ]

# テストデータ（20%）
test_data <- df_selected[-train_index, ]

# データ数の確認
cat("訓練データ:", nrow(train_data), "行\n")
cat("テストデータ:", nrow(test_data), "行\n")


#==========================
# XGBoostの交差検証とパラメータ最適化
#==========================

# 必要なパッケージ
# install.packages("xgboost")
# install.packages("caret")
# install.packages("pROC")

library(xgboost)
library(caret)
library(pROC)

# 再現性の確保
set.seed(123)

# ==========================
# 1. 目的変数をfactor型に変換
# ==========================

# train_dataを使用する
# 0と1が数値の状態から実行する

train_data$K6SPD_A <- factor(
  train_data$K6SPD_A,
  levels = c(1, 0),
  labels = c("Yes", "No")
)

# 件数を確認
print(table(train_data$K6SPD_A))

# ==========================
# 2. scale_pos_weightを計算
# ==========================

n_yes <- sum(train_data$K6SPD_A == "Yes")
n_no  <- sum(train_data$K6SPD_A == "No")

scale_pos_weight_value <- n_no / n_yes

cat("Yesの件数:", n_yes, "\n")
cat("Noの件数:", n_no, "\n")
cat("scale_pos_weight:",
    scale_pos_weight_value, "\n")

# ==========================
# 3. 層化5分割交差検証
# ==========================

set.seed(123)

folds <- createFolds(
  y = train_data$K6SPD_A,
  k = 5,
  returnTrain = FALSE
)

cv_control <- trainControl(
  method = "cv",
  number = 5,
  indexOut = folds,
  index = lapply(
    folds,
    function(i) setdiff(
      seq_len(nrow(train_data)), i
    )
  ),
  classProbs = TRUE,
  summaryFunction = twoClassSummary,
  savePredictions = "final",
  verboseIter = TRUE
)

# ==========================
# 4. ハイパーパラメータ
# ==========================

tune_grid <- expand.grid(
  nrounds = c(100,200,300),
  max_depth = c(1,2,3,4,5,6),
  eta = seq(0.1, 0.2, by = 0.01),
  gamma = c(0),
  colsample_bytree = c(1),
  min_child_weight = c(1),
  subsample = c(1)
)

# ==========================
# 5. XGBoostの学習
# ==========================

set.seed(123)

xgb_model <- train(
  K6SPD_A ~ .,
  data = train_data,
  method = "xgbTree",
  trControl = cv_control,
  tuneGrid = tune_grid,
  metric = "ROC",
  maximize = TRUE,
  
  # クラス不均衡への対応
  scale_pos_weight = scale_pos_weight_value,
  
  # GPU設定
  tree_method = "hist",
  device = "cuda",
  
  verbose = FALSE,
  nthread = 1
)

# ==========================
# 6. 最適パラメータの表示
# ==========================

print(xgb_model$bestTune)
print(xgb_model)

#==========================
# 6. 交差検証の結果を確認
#==========================

print(xgb_model)

# 各パラメータの結果一覧
print(xgb_model$results)

# 最適モデルの交差検証AUC
best_result <- xgb_model$results[
  which.max(xgb_model$results$ROC),
]

cat("交差検証AUC:", best_result$ROC, "\n")
# ==========================
# 最適パラメータでの交差検証
# Balanced Accuracyの計算
# ==========================

# 最適パラメータの検証データ予測を取得
cv_pred <- xgb_model$pred

# 各foldのBalanced Accuracyを計算
cv_balanced_accuracy <- sapply(
  split(cv_pred, cv_pred$Resample),
  function(df) {
    
    # 確率0.48を閾値としてクラスを判定
    pred_class <- factor(
      ifelse(df$Yes >= 0.48, "Yes", "No"),
      levels = c("Yes", "No")
    )
    
    # 混同行列
    cm <- confusionMatrix(
      data = pred_class,
      reference = factor(df$obs,
                         levels = c("Yes", "No")),
      positive = "Yes"
    )
    
    # Balanced Accuracy
    as.numeric(cm$byClass["Balanced Accuracy"])
  }
)

# 各foldの結果
print(cv_balanced_accuracy)

# 5foldの平均Balanced Accuracy
cat("交差検証 Balanced Accuracy（5fold平均）:",
    round(mean(cv_balanced_accuracy) * 100, 2),
    "%\n")
`;

const rCodeSha = String.raw`
# ==========================================
# 11. テストデータにおけるSHAP値の計算
# ==========================================

library(xgboost)
library(dplyr)
library(ggplot2)

X_test_df <- test_data[, features_cols, drop = FALSE]
X_test_mm <- model.matrix(~ ., data = X_test_df)
term_names <- attr(
  terms(~ ., data = X_test_df),
  "term.labels"
)
assign_index <- attr(X_test_mm, "assign")[-1]
feature_map <- data.frame(
  encoded_feature = colnames(X_test_mm)[-1],
  original_feature = term_names[assign_index]
)

X_test <- X_test_mm[, -1, drop = FALSE]
xgb_final <- xgb_model$finalModel

# 4. 学習時の説明変数名と順序を一致させる
model_features <- xgb_final$feature_names

if (!is.null(model_features)) {
  if (!setequal(colnames(X_test), model_features)) {
    stop("学習時とテストデータの説明変数名が一致しません")
  }
  
  X_test <- X_test[, model_features, drop = FALSE]
}

# 5. テストデータのSHAP値を計算
shap_values <- predict(
  xgb_final,
  newdata = X_test,
  predcontrib = TRUE
)

# 6. Bias（基準値）を除外
shap_values <- shap_values[
  ,
  seq_len(ncol(X_test)),
  drop = FALSE
]

colnames(shap_values) <- colnames(X_test)

# ==========================================
# 12. 説明変数ごとのSHAP重要度
# ==========================================

# ダミー変数を元の説明変数単位に集計
shap_original <- sapply(
  features_cols,
  function(v) {
    
    cols <- feature_map$encoded_feature[
      feature_map$original_feature == v
    ]
    
    rowSums(
      shap_values[, cols, drop = FALSE]
    )
  }
)

# 各説明変数のSHAP絶対値の平均
shap_importance <- data.frame(
  Feature = colnames(shap_original),
  MeanAbsSHAP = colMeans(abs(shap_original))
)

# 重要度の大きい順に並べ替える
shap_importance <- shap_importance %>%
  arrange(desc(MeanAbsSHAP))

# 結果を表示
cat("\n===== テストデータのSHAP重要度 =====\n")
print(shap_importance)
`;
const Code = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <p>xgboost/cross-validation.R(スクリプトの中心部分)</p>
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
        <pre className="w-[980px] mx-auto overflow-x-auto rounded bg-[#1B2340] p-4 text-sm text-white">
          <code>{rCode}</code>
        </pre>
      )}

      <p>交差検証AUC:0.9596241</p>
      <p>交差検証 Balanced Accuracy（5fold平均）: 90%</p>
    </div>
  );
};

export default Code;

export const CodeShap = () => {
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
          <code>{rCodeSha}</code>
        </pre>
      )}
    </>
  );
};
