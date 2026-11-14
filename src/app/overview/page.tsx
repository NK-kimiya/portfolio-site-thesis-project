import ContentSection from "@/components/ContentSection";
import Header from "@/components/Header";
import Source from "@/components/Source";
import StepCard from "@/components/StepCard";

const steps = [
  {
    title: "Step 1：調査加重ロジスティック回帰モデルのWald検定",
    description:
      "調査加重ロジスティック回帰分析を用いて、各説明変数と深刻な精神的苦痛との関連および統計的有意性を評価する。",
  },
  {
    title: "Step 2：XGboostモデルによる予測",
    description:
      "XGBoostを用いて予測モデルを構築し、SHAP値により各説明変数の予測への寄与度を評価し、統計的有意性と組み合わせ分析対象の説明変数を絞り込む",
  },
  {
    title: "Step 3：交互作用の検証",
    description:
      "SHAP交互作用値を用いて変数間の交互作用を探索し、相互作用項を追加した調査加重ロジスティック回帰により統計的有意性を検証する。",
  },
  {
    title: "Step 4：結果の統合と考察",
    description:
      "統計的有意性と予測への寄与度を比較し、深刻な精神的苦痛に関連する要因を総合的に考察する。",
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <main className="w-5/6 mx-auto">
        <h2 className="text-[#2a4073] text-3xl pt-5 text-center">研究概要</h2>

        <ContentSection title="研究目的">
          <p className="p-2">
            本研究では、2024年の米国国民健康面接調査（NHIS）の成人データを用いて、K6指標に基づく深刻な精神的苦痛の有無と、心理的・社会的要因、身体的・生活上の要因、および人口統計学的要因との関連を探索的に検討することを目的とする。
          </p>
          <p className="my-2">
            本研究で使用した分析コードおよび関連資料は、以下のGitHubリポジトリにて公開しています。
          </p>
          リポジトリURL：
          <a
            href="https://github.com/NK-kimiya/2026-UniverSity-Thesis-Project.git"
            className="underline text-[#4169e1]"
          >
            https://github.com/NK-kimiya/2026-UniverSity-Thesis-Project.git
          </a>
          <p className="my-2">実行環境</p>
          <ul>
            <li>プロセッサ：12th Gen Intel(R) Core(TM) i7-12700F (2.10 GHz)</li>
            <li>実装RAM：16.0 GB (15.8 GB 使用可能)</li>
            <li>グラフィックスカード：NVIDIA GeForce RTX 3060 Ti (8 GB)</li>
            <li>
              システムの種類：64 ビット オペレーティング システム、x64 ベース
              プロセッサ
            </li>
            <li>OS：Windows 11 Home</li>
          </ul>
        </ContentSection>

        <ContentSection title="研究の全体像">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step) => (
              <StepCard
                key={step.title}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </ContentSection>

        <ContentSection title="データセット">
          <p className="p-2">
            本研究では、米国疾病予防管理センター（CDC）の国立健康統計センター（NCHS）が実施した、2024年のNational
            Health Interview
            Survey（NHIS）の成人データを使用した。NHISは、米国の一般住民を対象とした全国規模の横断調査であり、健康状態、生活習慣、医療サービスの利用状況、社会経済的背景など、幅広い情報を収集している。2024年の成人データには、18歳以上の32,629人の回答が含まれている。
            本研究では、Kessler Psychological Distress
            Scale（K6）に基づく深刻な精神的苦痛の有無を目的変数とし、孤独感、食生活、睡眠、疲労感、社会生活機能、生活満足度、抑うつ・不安症状、服薬状況、年齢、性別に関する12変数を説明変数として使用した。
          </p>
        </ContentSection>
        <Source
          sources={[
            {
              text: "National Center for Health Statistics. National Health Interview Survey, 2024. Public-use data file and documentation.",
              url: "https://www.cdc.gov/nchs/nhis/documentation/index.html",
            },
            {
              text: "National Center for Health Statistics. National Health Interview Survey, 2024 survey description. 2025. Available from: https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Dataset_Documentation/NHIS/2024/srvydesc-508.pdf",
              url: "https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Dataset_Documentation/NHIS/2024/srvydesc-508.pdf",
            },
          ]}
        />
      </main>
    </>
  );
}
