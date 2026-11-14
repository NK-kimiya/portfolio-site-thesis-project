"use client";

import { useState } from "react";
const rCode = String.raw`
#===========================
#ファイルの読み込み
#===========================
zip_file <- "adult24csv.zip"
print(unzip(zip_file,list = TRUE))
tmp_dir <- tempdir()
print(tmp_dir)
unzip(zip_file,exdir = tmp_dir)
csv_files <- list.files(
  tmp_dir,
  pattern = "\\.csv$",
  full.names = TRUE
)
df <- read.csv(csv_files[1])

#===========================
#変数の定義
#===========================
#目的変数として使用する変数
purpose_cols = c("K6SPD_A")
#説明変数として使用する変数
features_cols = c("LONELY_A","FDSBALANCE_A","SLPREST_A","FGEFRQTRD_A","SOCERRNDS_A","LSATIS4_A","DEPMED_A","ANXFREQ_A","SOCSCLPAR_A","DEPFREQ_A","SEX_A","AGEP_A")
#使用するすべての変数
use_cols <- c(purpose_cols, features_cols)
df_selected <- df[,use_cols]
print(head(df_selected))
)`;
const Code = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <p>statistics/logistics.R(このページの該当箇所)</p>
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
        <pre
          id="preprocessing-code"
          className="overflow-x-auto rounded bg-[#1B2340] p-4 text-sm text-white"
        >
          <code>{rCode}</code>
        </pre>
      )}
    </>
  );
};

export default Code;
