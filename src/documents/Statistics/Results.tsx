const Results = () => {
  return (
    <>
      <div className="overflow-x-auto py-10">
        <table className="table-auto w-[800px] mx-auto">
          <thead className="bg-[#2a4073] text-white">
            <tr>
              <th className="p-2 border-r-1 border-white">変数名</th>
              <th className="p-2 border-r-1 border-white">回帰係数(約)</th>
              <th className="p-2 border-r-1 border-white">オッズ比(OR)(約)</th>
              <th className="p-2 border-r-1 border-white">95％信頼区間(OR)</th>
              <th className="p-2 border-r-1 border-white">p値</th>
              <th className="p-2">解釈</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">孤独感（LONELY_A）</td>
              <td className="p-2">+0.456</td>
              <td className="p-2">1.578</td>
              <td className="p-2">1.437～1.733</td>
              <td className="p-2">3.022255e-20 ＜ 0.05</td>
              <td className="p-2">
                孤独感が1段階高くなると、深刻な精神的苦痛のオッズが約1.58倍となる
              </td>
            </tr>
            <tr>
              <td className="p-2">食事の確保困難（FDSBALANCE_A）</td>
              <td className="p-2">−0.374</td>
              <td className="p-2">0.688</td>
              <td className="p-2">0.592～0.801</td>
              <td className="p-2">1.536164e-06 ＜ 0.05</td>
              <td className="p-2">
                食事の確保困難が1段階少なくなると、深刻な精神的苦痛のオッズが約31.2％低くなるという関連がある
              </td>
            </tr>
            <tr>
              <td className="p-2">快眠（SLPREST_A）</td>
              <td className="p-2">0.820</td>
              <td className="p-2">0.688</td>
              <td className="p-2">0.719～0.935</td>
              <td className="p-2">3.123904e-03 ＜ 0.05</td>
              <td className="p-2">
                十分に休息できた状態で目覚める頻度が1段階高くなると、深刻な精神的苦痛のオッズが約18.0％低いという関連がある。
              </td>
            </tr>
            <tr>
              <td className="p-2">疲労感（FGEFRQTRD_A）</td>
              <td className="p-2">+0.498</td>
              <td className="p-2">1.646</td>
              <td className="p-2">1.464～1.850</td>
              <td className="p-2">3.994608e-16 ＜ 0.05</td>
              <td className="p-2">
                疲労感を感じる頻度が1段階高くなると、深刻な精神的苦痛のオッズが約1.65倍（約64.6％高い）になるという関連がある
              </td>
            </tr>
            <tr>
              <td className="p-2">用事の困難度（SOCERRNDS_A）</td>
              <td className="p-2">+0.207</td>
              <td className="p-2">1.230</td>
              <td className="p-2">1.048～1.443</td>
              <td className="p-2">1.133189e-02 ＜ 0.05</td>
              <td className="p-2">
                一人で買い物や用事を済ませる際の困難が1段階大きくなると、深刻な精神的苦痛のオッズが約1.23倍（約23％高い）になるという関連が認められました。
              </td>
            </tr>
            <tr>
              <td className="p-2">服薬（DEPMED_A）</td>
              <td className="p-2">+0.092</td>
              <td className="p-2">1.096</td>
              <td className="p-2">0.876～1.372</td>
              <td className="p-2">4.223586e-01 ＜ 0.05</td>
              <td className="p-2">統計的に有意な関連は認められなかった。</td>
            </tr>
            <tr>
              <td className="p-2">不安や緊張の頻度（ANXFREQ_A）</td>
              <td className="p-2">+0.522</td>
              <td className="p-2">1.686</td>
              <td className="p-2">1.473～1.930</td>
              <td className="p-2">1.232952e-13 ＜ 0.05</td>
              <td className="p-2">
                不安を感じる頻度が1段階高くなると、深刻な精神的苦痛のオッズが約1.69倍（約68.6％高い）になるという関連が認められた
              </td>
            </tr>

            <tr>
              <td className="p-2">社会活動（SOCSCLPAR_A）</td>
              <td className="p-2">+0.422</td>
              <td className="p-2">1.525</td>
              <td className="p-2">1.318～1.765</td>
              <td className="p-2">2.095168e-08 ＜ 0.05</td>
              <td className="p-2">
                社会活動への参加の困難が1段階大きくなると、深刻な精神的苦痛のオッズが約1.53倍（約52.5％高い）になるという関連があった。
              </td>
            </tr>

            <tr>
              <td className="p-2">性別（SEX_A）</td>
              <td className="p-2">−0.061</td>
              <td className="p-2">0.941</td>
              <td className="p-2">0.771～1.149</td>
              <td className="p-2">5.510580e-01 ＜ 0.05</td>
              <td className="p-2">統計的に有意な関連は認められなかった。</td>
            </tr>

            <tr>
              <td className="p-2">年齢（AGEP_A）</td>
              <td className="p-2">−0.0219</td>
              <td className="p-2">0.978</td>
              <td className="p-2">0.973～0.984</td>
              <td className="p-2">8.621838e-14 ＜ 0.05</td>
              <td className="p-2">
                年齢が1歳高くなるごとに、深刻な精神的苦痛のオッズが約2.2％低いという関連があった。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto py-10">
        <p>各説明変数のVIFおよびGVIFの値は、以下の通りだった。</p>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="p-2">LONELY_A</th>
              <th className="p-2">FDSBALANCE_A</th>
              <th className="p-2">SLPREST_A</th>
              <th className="p-2">FGEFRQTRD_A</th>
              <th className="p-2">SOCERRNDS_A</th>
              <th className="p-2">LSATIS4_A</th>
              <th className="p-2">DEPMED_A</th>
              <th className="p-2">ANXFREQ_A</th>
              <th className="p-2">SOCSCLPAR_A</th>
              <th className="p-2">DEPFREQ_A</th>
              <th className="p-2">SEX_A</th>
              <th className="p-2">AGEP_A</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">1.357325</td>
              <td className="p-2">1.165608</td>
              <td className="p-2">1.263436</td>
              <td className="p-2">1.257022</td>
              <td className="p-2">1.891544</td>
              <td className="p-2">1.343420</td>
              <td className="p-2">1.463129</td>
              <td className="p-2">1.326962</td>
              <td className="p-2">1.832515</td>
              <td className="p-2">2.001985</td>
              <td className="p-2">1.104907</td>
              <td className="p-2">1.297831</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="space-y-4 py-10">
        <h3 className="text-xl font-bold">
          補足解析：年齢の自然三次スプライン
        </h3>
        <p>
          年齢と目的変数の対数オッズとの関係の非線形性を検討するため、補足解析を行った。年齢は取り得る値が多い量的変数であり、年齢によって対数オッズの変化の大きさが異なる可能性を検討できるため、自由度3の自然三次スプラインで表した。その他の説明変数は、主に少数の回答段階を持つ順序尺度の項目または二値変数であり、主解析と同じ形式でモデルに含めた。
        </p>
        <p>
          複雑標本設計を考慮したロジスティック回帰モデルを推定し、年齢のスプライン項の係数をWald検定で一括検定した。年齢全体の関連は、年齢を線形項とした主解析と同様に統計的に有意であった。年齢以外の説明変数についても、統計的有意性の判定は主解析と一致した。
        </p>
        <details>
          <summary className="cursor-pointer">
            Rコードを表示（static/spline/spline.R）
          </summary>
          <pre className="mt-2 overflow-x-auto rounded bg-[#1B2340] p-4 text-sm text-white">
            <code>{splineRCode}</code>
          </pre>
        </details>
      </section>
    </>
  );
};

const splineRCode = String.raw`#===========================
#ファイルの読み込み
#===========================
zip_file <- "adult24csv.zip"
print(unzip(zip_file,list = TRUE))#中身を展開せずにzipファイルの中身の一覧を表示
tmp_dir <- tempdir()#Rの一時保存先フォルダを取得
print(tmp_dir)
unzip(zip_file,exdir = tmp_dir)#tmp_dirにzipファイルを解凍
csv_files <- list.files(#フォルダ内のファイル一覧を取得
  tmp_dir,#探す対象のフォルダ
  pattern = "\\.csv$",#名前が.csvで終わるファイルのみ対象
  full.names = TRUE#ファイル名だけでなく、フォルダを含む完全なパスを返す
)
df <- read.csv(csv_files[1])

#===========================
#変数の定義
#===========================
#目的変数として使用する変数
purpose_cols = c("K6SPD_A")
#説明変数として使用する変数
features_cols = c("LONELY_A","FDSBALANCE_A","SLPREST_A","FGEFRQTRD_A","SOCERRNDS_A","LSATIS4_A","DEPMED_A","ANXFREQ_A","SOCSCLPAR_A","DEPFREQ_A","SEX_A","AGEP_A")
group_cols <- c("REGION")
# 調査設計変数を追加
survey_cols <- c(
  "WTFA_A",
  "PPSU",
  "PSTRAT"
)

# 使用するすべての変数
use_cols <- c(
  purpose_cols,
  features_cols,
  group_cols,
  survey_cols
)

df_selected <- df[,use_cols]

#===========================
#前処理
#===========================
library(dplyr)
# K6SPD_Aの前処理
df_selected <- df_selected %>%
  mutate(
    K6SPD_A = case_when(
      K6SPD_A == 1 ~ 1,
      K6SPD_A == 2 ~ 0,
      TRUE ~ NA_real_
    )
  )


#LONELY_Aの前処理
df_selected <- df_selected %>%
  mutate(
    LONELY_A = case_when(
      LONELY_A == 1 ~ 5,
      LONELY_A == 2 ~ 4,
      LONELY_A == 3 ~ 3,
      LONELY_A == 4 ~ 2,
      LONELY_A == 5 ~ 1,
      TRUE ~ NA_real_
    )
  )


#SLPREST_Aの前処理
df_selected <- df_selected %>%
  mutate(
    SLPREST_A = case_when(
      SLPREST_A == 1 ~ 1,
      SLPREST_A == 2 ~ 2,
      SLPREST_A == 3 ~ 3,
      SLPREST_A == 4 ~ 4,
      TRUE ~ NA_real_
    )
  )




df_selected <- df_selected %>%
  mutate(
    FGEFRQTRD_A = case_when(
      FGEFRQTRD_A == 1 ~ 1,
      FGEFRQTRD_A == 2 ~ 2,
      FGEFRQTRD_A == 3 ~ 3,
      FGEFRQTRD_A == 4 ~ 4,
      TRUE ~ NA_real_
    )
  )


#SOCERRNDS_A
df_selected <- df_selected %>%
  mutate(
    SOCERRNDS_A = case_when(
      SOCERRNDS_A == 1 ~ 1,
      SOCERRNDS_A == 2 ~ 2,
      SOCERRNDS_A == 3 ~ 3,
      SOCERRNDS_A == 4 ~ 4,
      TRUE ~ NA_real_
    )
  )


#LSATIS4_A
df_selected <- df_selected %>%
  mutate(
    LSATIS4_A = case_when(
      LSATIS4_A == 1 ~ 4,
      LSATIS4_A == 2 ~ 3,
      LSATIS4_A == 3 ~ 2,
      LSATIS4_A == 4 ~ 1,
      TRUE ~ NA_real_
    )
  )


#DEPMED_A
df_selected <- df_selected %>%
  mutate(
    DEPMED_A = case_when(
      DEPMED_A== 1 ~ "yes",
      DEPMED_A == 2 ~ "no",
      TRUE ~ NA_character_
    ),

    # カテゴリ変数に変換
    DEPMED_A = factor(
      DEPMED_A,
      levels = c("no", "yes")
    )
  )

#ANXFREQ_A
df_selected <- df_selected %>%
  mutate(
    ANXFREQ_A = case_when(
      ANXFREQ_A == 1 ~ 5,
      ANXFREQ_A == 2 ~ 4,
      ANXFREQ_A == 3 ~ 3,
      ANXFREQ_A == 4 ~ 2,
      ANXFREQ_A == 5 ~ 1,
      TRUE ~ NA_real_
    )
  )

#SOCSCLPAR_A
df_selected <- df_selected %>%
  mutate(
    SOCSCLPAR_A = case_when(
      SOCSCLPAR_A == 1 ~ 1,
      SOCSCLPAR_A == 2 ~ 2,
      SOCSCLPAR_A == 3 ~ 3,
      SOCSCLPAR_A == 4 ~ 4,
      TRUE ~ NA_real_
    )
  )

#DEPFREQ_A
df_selected <- df_selected %>%
  mutate(
    DEPFREQ_A = case_when(
      DEPFREQ_A == 1 ~ 5,
      DEPFREQ_A == 2 ~ 4,
      DEPFREQ_A == 3 ~ 3,
      DEPFREQ_A == 4 ~ 2,
      DEPFREQ_A == 5 ~ 1,
      TRUE ~ NA_real_
    )
  )

#SEX_A
df_selected <- df_selected %>%
  mutate(
    SEX_A = case_when(
      SEX_A== 1 ~ "Male",
      SEX_A == 2 ~ "Female",
      TRUE ~ NA_character_
    ),

    # カテゴリ変数に変換
    SEX_A = factor(
      SEX_A,
      levels = c("Male", "Female")
    )
  )


df_selected <- df_selected %>%
  mutate(
    AGEP_A = case_when(
      as.numeric(AGEP_A) >= 18 &
        as.numeric(AGEP_A) <= 85 ~ as.numeric(AGEP_A),
      TRUE ~ NA_real_
    )
  )

df_selected <- df_selected %>%
  mutate(
    FDSBALANCE_A = case_when(
      FDSBALANCE_A %in% 1:3 ~ as.numeric(FDSBALANCE_A),
      TRUE ~ NA_real_
    )
  )

#==========================
# 欠損値の確認
#==========================

# 目的変数と説明変数
model_cols <- c(
  purpose_cols,
  features_cols
)

# 変数ごとの欠損数と欠損率
missing_table <- data.frame(
  Variable = model_cols,

  Missing_N = sapply(
    df_selected[, model_cols, drop = FALSE],
    function(x) sum(is.na(x))
  ),

  Missing_Percent = sapply(
    df_selected[, model_cols, drop = FALSE],
    function(x) round(mean(is.na(x)) * 100, 2)
  )
)

# 欠損率の大きい順に並べる
missing_table <- missing_table[
  order(-missing_table$Missing_Percent),
]

print(missing_table)
#install.packages("survey")
library(survey)

# 調査ウェイトを数値型にする
df_selected$WTFA_A <- as.numeric(
  as.character(df_selected$WTFA_A)
)

# 調査設計変数が有効なデータ
design_ok <- with(
  df_selected,
  !is.na(WTFA_A) &
    is.finite(WTFA_A) &
    WTFA_A > 0 &
    !is.na(PPSU) &
    !is.na(PSTRAT)
)

# 調査設計を定義できるデータを確保
df_survey <- df_selected[design_ok, , drop = FALSE]

# 回帰分析に必要な変数
model_cols <- c(
  purpose_cols,
  features_cols
)

# 分析対象者のフラグ
df_survey$analysis_ok <- complete.cases(
  df_survey[, model_cols, drop = FALSE]
)

#==========================
# 完全ケース人数と除外率の確認
#==========================

n_total <- nrow(df_survey)

n_complete <- sum(df_survey$analysis_ok)

n_excluded <- n_total - n_complete

cat("調査設計が有効な人数:", n_total, "\n")

cat("完全ケース人数:", n_complete, "\n")

cat("除外人数:", n_excluded, "\n")

cat(
  "除外率:",
  round(n_excluded / n_total * 100, 2),
  "%\n"
)

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

age_spline_term <- "splines::ns(AGEP_A, df = 3)" # 年齢を自由度3の自然三次スプラインで表す

logistic_model <- svyglm( # 調査設計を考慮してスプラインモデルを推定する
  reformulate( # 説明変数と目的変数から回帰式を作る
    c(setdiff(features_cols, "AGEP_A"), age_spline_term), # 年齢の線形項をスプライン項に置き換える
    response = "K6SPD_A" # 目的変数を指定する
  ), # 回帰式の指定を終える
  design = design_analysis, # 完全ケースの調査設計を使う
  family = quasibinomial(link = "logit") # 二値の目的変数にロジットリンクを使う
) # スプラインモデルの推定を終える

# 回帰結果
model_summary <- summary(logistic_model)

print(model_summary)

#==========================
# 年齢全体の関連と非線形性の検定
#==========================

age_overall_test <- survey::regTermTest( # 年齢のスプライン係数をまとめて検定する
  logistic_model, # 検定対象のスプラインモデルを指定する
  reformulate(age_spline_term), # 検定対象を年齢の項に指定する
  method = "Wald" # 調査設計を考慮したWald検定を使う
) # 年齢全体の検定結果を保存する
print(age_overall_test) # 年齢全体の検定結果を表示する
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

wald_results <- model_summary$coefficients # 係数ごとのWald検定結果を取り出す
is_age_basis <- startsWith(rownames(wald_results), age_spline_term) # 年齢のスプライン基底の行を特定する
wald_results <- wald_results[!is_age_basis, , drop = FALSE] # オッズ比表から年齢の基底の行を除く
ci <- confint(logistic_model)[rownames(wald_results), , drop = FALSE] # 表に載せる係数の95%信頼区間を同じ順序で取得する

wald_table <- data.frame( # Wald検定とオッズ比の結果を表にまとめる
  Variable = rownames(wald_results), # 係数の名前を入れる
  Estimate = unname(wald_results[, 1]), # 対数オッズ尺度の推定値を入れる
  Survey_SE = unname(wald_results[, 2]), # 調査設計を考慮した標準誤差を入れる
  Wald_t = unname(wald_results[, 3]), # Waldのt統計量を入れる
  p_value = unname(wald_results[, 4]), # Wald検定のp値を入れる
  OR = unname(exp(wald_results[, 1])), # 推定値を指数変換してオッズ比を求める
  OR_lower_95 = unname(exp(ci[, 1])), # オッズ比の95%信頼区間の下限を入れる
  OR_upper_95 = unname(exp(ci[, 2])), # オッズ比の95%信頼区間の上限を入れる
  row.names = NULL # 表に独自の行名を設定しない
) # 結果表の作成を終える

print(wald_table) # Wald検定とオッズ比の表を表示する
`;

export default Results;
