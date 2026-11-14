"use client";
import { useState } from "react";
const rCode = String.raw`
library(survey)
# 調査設計を定義
design_all <- svydesign(
  ids = ~PPSU,
  strata = ~PSTRAT,
  weights = ~WTFA_A,
  data = df_survey,
  nest = TRUE
)

# 回帰分析の対象者だけを指定
design_analysis <- subset(
  design_all,
  analysis_ok
)

#==========================
# 全分析対象者でモデルを学習
#==========================

logistic_model <- svyglm(
  reformulate(
    features_cols,
    response = "K6SPD_A"
  ),
  design = design_analysis,
  family = quasibinomial(link = "logit")
)

# 回帰結果
model_summary <- summary(logistic_model)

print(model_summary)

#==========================
# VIF（多重共線性）の確認
#==========================

# 初回のみインストール
# install.packages("car")

library(car)

# VIFを計算
vif_values <- car::vif(logistic_model)

# 結果を表示
print(vif_values)

#==========================
# Wald検定とオッズ比
#==========================

wald_results <- model_summary$coefficients

# 95%信頼区間
ci <- confint(logistic_model)

wald_table <- data.frame(
  Variable = rownames(wald_results),
  Estimate = unname(wald_results[, 1]),
  Survey_SE = unname(wald_results[, 2]),
  Wald_t = unname(wald_results[, 3]),
  p_value = unname(wald_results[, 4]),
  OR = unname(exp(coef(logistic_model))),
  OR_lower_95 = unname(exp(ci[, 1])),
  OR_upper_95 = unname(exp(ci[, 2])),
  row.names = NULL
)

print(wald_table)
`;

const Code = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <p>statistics/logistics.R(スクリプトの中心部分)</p>
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

export default Code;
