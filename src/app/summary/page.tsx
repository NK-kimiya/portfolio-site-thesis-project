import ContentSection from "@/components/ContentSection";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <main className="w-5/6 mx-auto">
        <h2 className="text-[#2a4073] text-3xl pt-5 text-center">
          まとめと今後の発展
        </h2>
        <ContentSection title="総合考察">
          <div className="bg-[#F0F1FC] rounded-4xl p-5 my-5">
            <h3 className="text-[#2a4073] text-xl">
              1. 統計解析による関連要因の特定
            </h3>
            <p>12の説明変数のうち、10変数がSPDと統計的に有意な関連を示した。</p>
            <h4 className="text-lg text-[#2a4073] my-2">
              ・特に正の関連が強かった要因：
            </h4>
            <ul>
              <li>抑うつ症状（OR＝2.242）</li>
              <li>不安の頻度（OR＝1.686）</li>
              <li>疲労感（OR＝1.646）</li>
              <li>孤独感（OR＝1.578）</li>
            </ul>
            <p>抗うつ薬の服薬状況および性別は、統計的に有意ではなかった。</p>
          </div>

          <div className="bg-[#F0F1FC] rounded-4xl p-5 my-5">
            <h3 className="text-[#2a4073] text-xl">
              2.機械学習による予測上の重要度
            </h3>
            <h4 className="text-lg text-[#2a4073] my-2">
              ・XGBoostのSHAP分析における重要度上位4変数：
            </h4>
            <ul className="my-2">
              <li>抑うつの頻度</li>
              <li>不安の頻度</li>
              <li>孤独感</li>
              <li>疲労感</li>
            </ul>
            <p>
              これら4変数は、ロジスティック回帰分析でも統計的に有意であった。
            </p>
            <p>統計解析と機械学習の両方で、共通して重要な要因が抽出された。</p>
          </div>

          <div className="bg-[#F0F1FC] rounded-4xl p-5 my-5">
            <h3 className="text-[#2a4073] text-xl">
              3.SHAPによる予測への寄与の変化
            </h3>
            <p>
              症状の頻度が高くなるにつれて、SPDの予測を高める方向に寄与する傾向がみられた。
            </p>
            <h4 className="text-lg text-[#2a4073] my-2">
              ・平均SHAP値が正に転じた頻度：
            </h4>
            <ul className="my-2">
              <li>抑うつ頻度： 月1回程度以上</li>
              <li>孤独感： 「ときどき」以上</li>
              <li>疲労感： 「ほとんど毎日」以上</li>
              <li>不安の頻度： 「毎日」で大きな正の寄与</li>
            </ul>
            <p>
              症状の頻度によって、予測への寄与が一様ではない可能性が示された。
            </p>
            <p>
              これらは予測モデル上の特徴であり、医学的な発症閾値や因果関係を示すものではない。
            </p>
          </div>

          <div className="bg-[#F0F1FC] rounded-4xl p-5 my-5">
            <h3 className="text-[#2a4073] text-xl">4.交互作用の検証</h3>
            <h4 className="text-lg text-[#2a4073] my-2">
              ・SHAP交互作用分析で比較的大きな寄与を示した3組：
            </h4>
            <ul className="my-2">
              <li>不安の頻度 × 抑うつの頻度</li>
              <li>疲労感 × 抑うつの頻度</li>
              <li>疲労感 × 不安の頻度</li>
            </ul>
            <h4 className="text-lg text-[#2a4073] my-2">
              ・調査加重ロジスティック回帰分析による検証結果：
            </h4>
            <ul className="my-2">
              <li>不安 × 抑うつ：p＝0.769</li>
              <li>疲労 × 抑うつ：p＝0.766</li>
              <li>疲労 × 不安：p＝0.349</li>
            </ul>
            <p>3組すべてで、統計的に有意な交互作用は認められなかった。</p>
            <p>
              平均中心化後も一部のVIFが高く、多重共線性による推定精度への影響に注意が必要であった。
            </p>
          </div>

          <div className="bg-[#F0F1FC] rounded-4xl p-5 my-5">
            <h3 className="text-[#2a4073] text-xl">
              5.統計解析と機械学習から得られた知見
            </h3>
            <h4 className="text-lg text-[#2a4073] my-2">・共通点</h4>
            <p>
              抑うつ頻度、不安の頻度、孤独感、疲労感が主要な関連要因として抽出された。
            </p>
            <h4 className="text-lg text-[#2a4073] my-2">・相違点</h4>
            <p>
              SHAPでは予測上の交互作用が示唆されたが、ロジスティック回帰では統計的有意性を確認できなかった。
            </p>
          </div>

          <div className="bg-[#F0F1FC] rounded-4xl p-5 my-5">
            <h3 className="text-[#2a4073] text-xl mb-2">6.研究全体の結論</h3>
            <p>
              SPDの主要な関連要因として、抑うつ頻度、不安の頻度、孤独感、疲労感が抽出された。
            </p>
            <p>
              各症状の頻度によって、SPDの予測への寄与が変化することが示された。
            </p>
            <p>
              一方、3組の交互作用については、統計的に有意な関連を支持する十分な証拠は得られなかった。
            </p>
            <p>
              統計解析と機械学習を組み合わせることで、関連要因の統計的有意性、予測上の重要度、寄与の変化を多面的に評価できた。
            </p>
          </div>
          <small>
            ※本研究は横断データを用いた分析であり、結果から因果関係を断定することはできない。また、SHAPの重要度とロジスティック回帰のオッズ比は異なる指標である。
          </small>
        </ContentSection>
        <ContentSection title="今後の発展">
          <p>
            本研究で構築したXGBoostモデルは、Balanced
            Accuracyが90.93％、Sensitivity（感度）が92.69％、Specificity（特異度）が89.17％となり、深刻な精神的苦痛（SPD）の有無に対して比較的高い識別性能を示した。
            一方、Sensitivityに比べてSpecificityが低く、実際にはSPDがない対象者をSPDありと誤判定したケースが641件確認された。このことから、SPDがある対象者の検出性能を維持しながら、SPDがない対象者の誤判定を減らすことが今後の課題である。
            さらなる予測性能の向上を目指し、特徴量エンジニアリングと不均衡データに対するサンプリング手法を組み合わせたモデルの構築を検討する。特に、特徴量エンジニアリングでは、交互作用特徴量や集約特徴量を新たに作成することが有用である可能性がある。また、誤分類分析を通じて、誤判定された対象者の特徴を調べ、識別に役立つ変数を追加することも、試す価値があると考えられる。
          </p>
        </ContentSection>
        <ContentSection title="免責事項">
          <p>
            本研究は、米国疾病予防管理センター（CDC）のNational Center for
            Health Statistics（NCHS）が公開するNational Health Interview
            Survey（NHIS）のデータを使用した独立した分析です。
            本研究の分析結果および考察は著者独自のものであり、CDCおよびNCHSの公式見解を示すものではありません。また、これらの機関は本研究の実施や結論に関与していません。
          </p>
        </ContentSection>
      </main>
    </div>
  );
};

export default page;
