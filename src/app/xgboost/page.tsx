import ContentSection from "@/components/ContentSection";
import React from "react";
import Parameters from "../../documents/MachineLearning/Parameters";
import Math from "../../documents/MachineLearning/Math";
import Code, { CodeShap } from "../../documents/MachineLearning/Code";
import CodeValidation from "../../documents/Statistics/Code";
import Shap from "../../documents/MachineLearning/Shap";
import Header from "@/components/Header";
import Source from "@/components/Source";

const page = () => {
  return (
    <div>
      <Header />
      <main className="w-5/6 mx-auto">
        <h2 className="text-[#2a4073] text-3xl pt-5 text-center">
          XGBoostによる予測モデルの構築と重要変数の探索
        </h2>
        <ContentSection title="深刻な精神的苦痛の予測に寄与する変数の評価">
          <p>
            ロジスティック回帰分析では、各説明変数と深刻な精神的苦痛との統計的な関連性を検証した。
            続いて、XGBoostを用いて深刻な精神的苦痛の有無を予測するモデルを構築し、各説明変数が予測にどの程度寄与しているかを評価する。
            XGBoostによる変数の寄与度は、統計的有意性を直接示すものではないが、ロジスティック回帰分析の結果と組み合わせることで、統計的な関連性と予測上の重要性の両面から、今後の詳細な分析で注目すべき変数を探索的に絞り込むことを目的とする。
          </p>
        </ContentSection>
        <ContentSection title="XGBoostにおける交差検証を用いたハイパーパラメータの最適化">
          <p>
            本研究では、XGBoostモデルの過学習を抑制し、未知データに対する予測性能の向上を図るため、交差検証によるハイパーパラメータの最適化を実施した。
            まず、目的変数である深刻な精神的苦痛の有無のクラス比率を維持するように、分析データを訓練データ80％、テストデータ20％に層化ランダム分割した。
            次に、訓練データをさらに5分割し、4分割をモデルの学習、残りの1分割を検証に使用する層化5分割交差検証を実施した。この処理を検証データを入れ替えながら5回繰り返し、各ハイパーパラメータの組み合わせについて、検証データにおけるAUCの平均値を算出した。
            最終的に、平均AUCが最大となるハイパーパラメータの組み合わせを選定した。また、目的変数のクラス不均衡に対応するため、訓練データにおける陰性例と陽性例の件数比からscale_pos_weightを算出し、モデル学習時に設定した。
            これにより、過学習を抑制しつつ、深刻な精神的苦痛の予測に適したモデルの構築を目指した。
          </p>
        </ContentSection>
        <ContentSection title="実際に探索したハイパーパラメータ">
          <Parameters />
          <h4 className="text-xl text-[#2a4073] p-2">Rスクリプト</h4>
          <Code />
        </ContentSection>
        <ContentSection title="クラス不均衡への対応">
          <Math />
        </ContentSection>
        <ContentSection title="統計的有意性と予測寄与度に基づく候補変数の選定">
          <p>
            本研究では、ロジスティック回帰分析による統計的有意性と、XGBoostモデルのSHAP値による予測寄与度を比較し、分析において注目すべき変数を探索的に選定した。
            分析の結果、抑うつ症状の頻度（DEPFREQ_A）、不安症状の頻度（ANXFREQ_A）、孤独感（LONELY_A）、疲労感（FGEFRQTRD_A）の4変数は、ロジスティック回帰分析において統計的に有意な関連を示し、SHAP値も他の変数と比較して相対的に大きかった。
            一方、日常生活上の用事の困難、社会活動への参加困難、年齢、睡眠による休息状況、食事の確保困難、生活満足度についても統計的に有意な関連が認められたが、SHAP値は上位4変数と比較して小さかった。
            また、服薬状況と性別については統計的に有意な関連が認められず、予測への寄与度も小さかった。
            以上の結果を踏まえ、本研究では、抑うつ症状、不安症状、孤独感、疲労感の4変数を、優先的な検討対象として選定する。
            ただし、SHAP値は予測モデルにおける各変数の寄与度を示す指標であり、統計的有意性や因果関係を示すものではない。したがって、SHAP値の大きさを統計的な根拠として解釈せず、ロジスティック回帰分析による統計的関連性とは区別して評価する。
            今回の変数選定は、統計的関連性と予測上の重要性という異なる2つの観点を参考にした探索的なものであり、選定された変数が精神的苦痛の原因であることや、他の変数より統計的に重要であることを証明するものではない。
          </p>
          <h4 className="text-xl text-[#2a4073] p-2">Rスクリプト</h4>
          <CodeShap />
          <Shap />
        </ContentSection>
        <ContentSection title="まとめ">
          <p>
            ロジスティック回帰分析による統計的有意性と、XGBoostのSHAP値による予測寄与度を比較した結果、抑うつ症状、不安症状、孤独感、疲労感の4変数は、いずれも統計的に有意な関連を示し、予測への寄与度も相対的に大きいことが確認された。
            この結果を踏まえ、これら4変数を今後の詳細な分析において優先的に検討する候補として選定した。
            ただし、SHAP値は機械学習モデルの予測に対する各変数の寄与度を示すものであり、統計的有意性や因果関係を示すものではない。
            そのため、SHAP値の大きさを統計的な根拠として扱うことはできない。
            本研究における変数の絞り込みは、統計的関連性と予測上の重要性という異なる観点を組み合わせた探索的な選定であり、選定した4変数の因果的な重要性を証明するものではない。
          </p>
        </ContentSection>
        <div>
          <Source
            sources={[
              {
                text: "GradientBoost Notes. (2026, May 15). XGBoost hyperparameters: A practical tuning guide. XGBoost: A Reader's Encyclopedia. ",
                url: "https://www.xgboost.org/code/hyperparameter-tuning-guide/",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default page;
