import React from "react";
import ContentSection from "@/components/ContentSection";
import Code from "../../documents/Statistics/Code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import Results from "../../documents/Statistics/Results";
import Header from "@/components/Header";
import Source from "@/components/Source";
const page = () => {
  return (
    <div>
      <Header />
      <main className="w-5/6 mx-auto">
        <h2 className="text-[#2a4073] text-3xl pt-5 text-center">
          ロジスティック回帰モデルの構築と統計的有意性の評価
        </h2>
        <ContentSection title="調査加重ロジスティック回帰モデルの構築">
          <div className="p-2 pb-10">
            本分析では、深刻な精神的苦痛の有無と各説明変数との関連を検討するため、2024年のNational
            Health Interview
            Survey（NHIS）の成人データを用いて、調査加重ロジスティック回帰分析を実施した。
            NHISは、米国の民間非施設居住人口を対象とした全国規模の横断調査であり、地理的なクラスター化と層化を伴う複雑な標本抽出設計を採用している。
            本分析では、目的変数および12個の説明変数を抽出し、各変数の再符号化と欠損値処理を実施した。その後、成人用の最終標本ウェイト（WTFA_A）、公開用の層化変数（PSTRAT）、一次抽出単位（PPSU）を用いて調査設計を定義した。
            ロジスティック回帰モデルの推定には、Rのsurveyパッケージのsvyglm関数を使用し、標本抽出設計を考慮した回帰係数と標準誤差を推定した。
            各説明変数の統計的有意性は、調査設計に基づく標準誤差を用いたWald検定により評価し、回帰係数、p値、オッズ比（OR）および95％信頼区間を算出した。これにより、複雑な標本抽出設計を考慮しながら、深刻な精神的苦痛と各説明変数との関連を検討した。
          </div>
          <div className="my-2">
            <h4 className="text-2xl text-[#2a4073] p-2">
              NHIS 2024の標本抽出の概念図
            </h4>
            <div className="text-center bg-[#2a4073]  p-4 text-white">
              <p className="text-2xl font-bold">米国50州＋ワシントンD.C.</p>
              <p className="">
                調査対象：一般世帯等に居住する非施設居住の民間人
              </p>
              <p className="">↓</p>
              <p className="text-2xl font-bold">1,689の地理的区域に分割</p>
              <p>郡・郡相当区域・隣接する郡のグループ</p>
              <p>↓</p>
              <div className="p-2 border-2 border-white rounded-xl">
                <p className="text-2xl font-bold">層化</p>
                <p>州内の地域を人口密度などで1～2層に区分</p>
              </div>
              <p>↓</p>
              <div className="p-2 border-2 border-white rounded-xl">
                <p className="text-2xl font-bold">住所クラスターの形成</p>
                <p>1クラスター：約2,500住所</p>
              </div>
              <p>↓</p>
              <div className="p-2 border-2 border-white rounded-xl">
                <p className="text-2xl font-bold">クラスターを系統抽出</p>
                <p>各層から抽出するクラスターを決定</p>
              </div>
              <p>↓</p>
              <div className="p-2 border-2 border-white rounded-xl">
                <p className="text-2xl font-bold">
                  調査対象となる住所・世帯を選択
                </p>
                <p>抽出された住所の居住者を調査</p>
              </div>
              <p>↓</p>
              <div className="p-2 border-2 border-white rounded-xl">
                <p className="text-2xl font-bold">
                  各世帯から成人1人を無作為抽出
                </p>
                <p>18歳以上の成人から選択</p>
              </div>
            </div>
          </div>
        </ContentSection>
        <ContentSection title="Rスクリプト">
          <Code />
        </ContentSection>
        <ContentSection title="ロジスティック回帰分析の結果">
          <p>
            NHISの標本ウェイト、層化およびクラスター構造を考慮したロジスティック回帰分析を実施し、各説明変数の回帰係数、95％信頼区間およびWald検定によるp値を算出した。
            分析の結果、12個の説明変数のうち10変数で統計的に有意な関連が認められた（p＜0.05）。
            特に、抑うつ症状の頻度（DEPFREQ_A）は正の回帰係数（β＝0.807、p＜0.001）を示し、深刻な精神的苦痛との強い正の関連が認められた。また、不安症状の頻度、疲労感、孤独感、社会活動への参加困難なども、有意な正の関連を示した。
            一方、食料確保の困難、睡眠による休息状況、生活満足度および年齢は、有意な負の回帰係数を示した。これらの関連の方向は、各変数の回答コードの定義を踏まえて解釈する必要がある。
            なお、抑うつに対する服薬状況（p＝0.422）および性別（p＝0.551）については、統計的に有意な関連は認められなかった。
          </p>
          <div className="">
            <Results />
          </div>
        </ContentSection>
        <ContentSection title="まとめ">
          <p>
            調査加重ロジスティック回帰分析の結果、孤独感、食事の確保困難、睡眠による休息状況、疲労感、日常生活上の用事の困難、不安症状の頻度、社会活動への参加困難、年齢などの変数において、深刻な精神的苦痛との統計的に有意な関連が認められた（p＜0.05）。
            特に、孤独感、不安症状の頻度、疲労感、社会活動への参加困難が大きいほど、深刻な精神的苦痛のオッズが高い傾向が示された。一方、食事の確保困難が少ないこと、睡眠による休息が十分であること、年齢が高いことは、精神的苦痛のオッズが低いことと関連していた。
            なお、抑うつ症状に対する服薬状況および性別については、統計的に有意な関連は認められなかった。
            これらの結果から、深刻な精神的苦痛には、心理的・精神的要因に加えて、身体的・生活上の状態や社会生活機能など、複数の要因が関連している可能性が示唆された。
          </p>
        </ContentSection>
        <Source
          sources={[
            {
              text: "University of California, Los Angeles, Office of Advanced Research Computing. (n.d.). Survey data analysis with R. UCLA Statistical Consulting Group. ",
              url: "https://stats.oarc.ucla.edu/r/seminars/survey-data-analysis-with-r/",
            },
            {
              text: "Fox, J., & Nilsson, H. (n.d.). Variance inflation factors. R Documentation, car package.",
              url: "https://search.r-project.org/CRAN/refmans/car/html/vif.html",
            },
            {
              text: "UCLA Office of Advanced Research Computing. (n.d.). FAQ: How do I interpret odds ratios in logistic regression? UCLA Statistical Consulting Group. ",
              url: "https://stats.oarc.ucla.edu/other/mult-pkg/faq/general/faq-how-do-i-interpret-odds-ratios-in-logistic-regression/",
            },
          ]}
        />
      </main>
    </div>
  );
};

export default page;
