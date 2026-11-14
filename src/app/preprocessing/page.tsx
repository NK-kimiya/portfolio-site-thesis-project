import React from "react";
import ContentSection from "@/components/ContentSection";
import Table from "../../documents/Preprocessing/Table";
import Code from "../../documents/Preprocessing/Code";
import Header from "@/components/Header";
import Source from "@/components/Source";
type Variable = {
  name: string;
  meaning: string;
};

type VariableGroup = {
  category: string;
  variables: Variable[];
};

const variableGroups: VariableGroup[] = [
  {
    category: "心理・精神的要因",
    variables: [
      {
        name: "LONELY_A",
        meaning: "孤独感：孤独を感じる頻度",
      },
      {
        name: "LSATIS4_A",
        meaning: "生活満足度：現在の生活全般に対する満足度",
      },
      {
        name: "ANXFREQ_A",
        meaning: "不安症状：心配、緊張、不安を感じる頻度",
      },
      {
        name: "DEPFREQ_A",
        meaning: "抑うつ症状：抑うつを感じる頻度",
      },
    ],
  },
  {
    category: "生活・身体的要因",
    variables: [
      {
        name: "FDSBALANCE_A",
        meaning:
          "食料確保の困難：過去30日間に経済的理由でバランスの取れた食事を確保できなかった状況",
      },
      {
        name: "SLPREST_A",
        meaning:
          "睡眠による休息状況：過去30日間に十分休息できた状態で目覚めた頻度",
      },
    ],
  },
  {
    category: "社会生活機能",
    variables: [
      {
        name: "SOCERRNDS_A",
        meaning:
          "日常生活上の用事の困難：身体的・精神的・感情的な状態による、一人での買い物や通院などの困難",
      },
      {
        name: "SOCSCLPAR_A",
        meaning:
          "社会活動への参加困難：友人との交流、集会などの社会活動への参加の困難",
      },
    ],
  },
  {
    category: "治療関連要因",
    variables: [
      {
        name: "DEPMED_A",
        meaning: "抑うつに対する服薬：抑うつ症状に対する処方薬の服用の有無",
      },
      {
        name: "SOCSCLPAR_A",
        meaning:
          "社会活動への参加困難：友人との交流、集会などの社会活動への参加の困難",
      },
    ],
  },
  {
    category: "人口統計学的要因",
    variables: [
      {
        name: "SEX_A",
        meaning: "性別：調査で記録された性別",
      },
      {
        name: "AGEP_A",
        meaning: "年齢：調査対象者の年齢",
      },
    ],
  },
];

const Page = () => {
  return (
    <div>
      <Header />
      <main className="w-4/5 mx-auto">
        <h2 className="text-[#2a4073] text-3xl pt-5 text-center">
          説明変数の選定と前処理
        </h2>

        <ContentSection title="使用する変数">
          <p className="p-2 pb-10">
            本研究では、深刻な精神的苦痛との関連が想定される要因について、先行研究を参考に説明変数を選定した。具体的には、心理・精神的要因として孤独感、生活満足度、不安症状、抑うつ症状、生活・身体的要因として食料確保の困難、睡眠による休息状況、疲労感、社会生活機能に関する要因として日常生活上の用事および社会活動への参加の困難、治療関連要因として抑うつに対する薬物治療、人口統計学的要因として性別および年齢を設定し、計12変数を説明変数として使用した。
            これらの説明変数を用いて、ロジスティック回帰分析による統計的関連性の検証と、XGBoostおよびSHAPによる予測への寄与度の評価を行い、深刻な精神的苦痛に関連する要因を探索的に検討する。
          </p>
          <table className="w-full border-collapse border border-gray-300 overflow-x-auto">
            <thead>
              <tr className="bg-[#eaedf7] text-[#1B2340]">
                <th className="border border-gray-300 p-3 text-left">分類</th>
                <th className="border border-gray-300 p-3 text-left">変数名</th>
                <th className="border border-gray-300 p-3 text-left">意味</th>
              </tr>
            </thead>

            <tbody>
              {variableGroups.map((group) =>
                group.variables.map((variable, index) => (
                  <tr key={`${group.category}-${variable.name}`}>
                    {index === 0 && (
                      <th
                        rowSpan={group.variables.length}
                        scope="rowgroup"
                        className="border border-gray-300 p-3 text-left align-top font-normal"
                      >
                        {group.category}
                      </th>
                    )}

                    <td className="border border-gray-300 p-3">
                      {variable.name}
                    </td>

                    <td className="border border-gray-300 p-3">
                      {variable.meaning}
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </ContentSection>
        <ContentSection title="データの前処理">
          <p className="p-2 pb-10">
            本分析では、2024年のNational Health Interview
            Survey（NHIS）の成人データから、目的変数であるK6に基づく深刻な精神的苦痛の有無（K6SPD_A）と、12個の説明変数を抽出した。
            目的変数は、深刻な精神的苦痛がある場合を1、ない場合を0とする二値変数に変換した。説明変数については、分析および結果の解釈を容易にするため、一部の順序尺度の値を反転させ、服薬状況と性別をカテゴリ変数に変換した。また、各変数の有効な回答範囲外の値を欠損値として処理した。
            その後、目的変数または説明変数に欠損値を含む回答者を除外する完全ケース分析（Complete-case
            analysis）を採用しました。
            最後に、目的変数のクラス比率を維持する層化ランダム抽出により、データを訓練データ80％とテストデータ20％に分割しました。乱数シードは123に固定し、分析の再現性を確保しました。
          </p>
          <Table />
        </ContentSection>
        <ContentSection title="Rスクリプト">
          <Code />
        </ContentSection>
        <Source
          sources={[
            {
              text: "National Center for Health Statistics. National Health Interview Survey, 2024: Sample Adult Codebook. 2025. Available from: https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Dataset_Documentation/NHIS/2024/Adult-codebook.pdf",
              url: "https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Dataset_Documentation/NHIS/2024/Adult-codebook.pdf",
            },
          ]}
        />
      </main>
    </div>
  );
};

export default Page;
