import React from "react";

const Interaction = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-[800px] mx-auto">
        <thead>
          <tr>
            <th>順位</th>
            <th>変数の組み合わせ</th>
            <th>平均絶対SHAP交互作用値</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">1</td>
            <td className="p-2">不安症状の頻度 × 抑うつの頻度</td>
            <td className="p-2">0.1015</td>
          </tr>
          <tr>
            <td className="p-2">2</td>
            <td className="p-2">疲労感 × 抑うつ症状</td>
            <td className="p-2">0.0515</td>
          </tr>
          <tr>
            <td className="p-2">3</td>
            <td className="p-2">疲労感 × 不安症状</td>
            <td className="p-2">0.0480</td>
          </tr>
          <tr>
            <td className="p-2">4</td>
            <td className="p-2">社会活動の困難 × 抑うつ症状</td>
            <td className="p-2">0.0301</td>
          </tr>
          <tr>
            <td className="p-2">5</td>
            <td className="p-2">服薬状況 × 抑うつ症状</td>
            <td className="p-2">0.0288</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Interaction;
