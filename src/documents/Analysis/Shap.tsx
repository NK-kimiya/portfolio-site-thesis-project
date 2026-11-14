import React from "react";

const Shap = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-[800px] mx-auto">
        <thead>
          <tr>
            <th>変数</th>
            <th>SHAP値の変化</th>
            <th>解釈</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">不安の頻度(ANXFREQ_A)</td>
            <td className="p-2">1～3では負、4でも負、5で正</td>
            <td className="p-2">
              不安を毎日感じる場合に、精神的苦痛の予測を高める方向に寄与する
            </td>
          </tr>
          <tr>
            <td className="p-2">抑うつの頻度(DEPFREQ_A)</td>
            <td className="p-2">1～2で負、3以上で正</td>
            <td className="p-2">
              抑うつを毎月以上感じる場合に、精神的苦痛の予測を高める方向に寄与する
            </td>
          </tr>
          <tr>
            <td className="p-2">疲労感（FGEFRQTRD_A）</td>
            <td className="p-2">1～2で負、3～4で正</td>
            <td className="p-2">
              疲労感がほとんどの日、または毎日ある場合に、精神的苦痛の予測を高める方向に寄与する
            </td>
          </tr>
          <tr>
            <td className="p-2">孤独感（LONELY_A）</td>
            <td className="p-2">1～2で負、3以上で正</td>
            <td className="p-2">
              孤独感をときどき以上感じる場合に、精神的苦痛の予測を高める方向に寄与する
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Shap;

export const ShapLoss = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-[800px] mx-auto">
        <thead>
          <tr>
            <th>変数</th>
            <th>SHAP値の変化</th>
            <th>解釈</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">不安の頻度(ANXFREQ_A)</td>
            <td className="p-2">1～4</td>
            <td className="p-2">
              不安が毎週以下の頻度の場合、予測を低める方向に寄与
            </td>
          </tr>
          <tr>
            <td className="p-2">抑うつの頻度(DEPFREQ_A)</td>
            <td className="p-2">1～2</td>
            <td className="p-2">
              抑うつを感じない、または年に数回程度の場合、予測を低める方向に寄与
            </td>
          </tr>
          <tr>
            <td className="p-2">疲労感（FGEFRQTRD_A）</td>
            <td className="p-2">1～2</td>
            <td className="p-2">
              疲労感がまったくない、または何日かある場合、予測を低める方向に寄与
            </td>
          </tr>
          <tr>
            <td className="p-2">孤独感（LONELY_A）</td>
            <td className="p-2">1～2で負</td>
            <td className="p-2">
              孤独感がまったくない、またはまれな場合、予測を低める方向に寄与
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
