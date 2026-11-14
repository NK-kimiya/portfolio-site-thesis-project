import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
const Math = () => {
  const formula = String.raw`
    \text{scale\_pos\_weight}
    = \frac{\text{陰性例（No）の件数}}
           {\text{陽性例（Yes）の件数}}
  `;
  return (
    <div>
      <BlockMath math={formula} />
      <p>
        深刻な精神的苦痛の有無にはクラス不均衡が存在するため、少数クラスの予測が軽視されることを抑える目的で、XGBoostのscale_pos_weightを設定した。具体的には、訓練データにおける陰性例と陽性例の件数比を用いて重みを算出し、モデル学習時に反映した。
      </p>
    </div>
  );
};

export default Math;
