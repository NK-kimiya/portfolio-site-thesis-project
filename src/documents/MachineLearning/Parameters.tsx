import React from "react";

const Parameters = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-[800px] mx-auto">
        <thead>
          <tr>
            <th>パラメータ</th>
            <th>探索範囲</th>
            <th>主な役割</th>
            <th>採用値</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">nrounds</td>
            <td className="p-2">100, 200, 300</td>
            <td className="p-2">木を追加する回数</td>
            <td className="p-2">100</td>
          </tr>
          <tr>
            <td className="p-2">max_depth</td>
            <td className="p-2">2～6</td>
            <td className="p-2">木の最大深さ・複雑さを制御</td>
            <td className="p-2">2</td>
          </tr>
          <tr>
            <td className="p-2">eta</td>
            <td className="p-2">0.10～0.20（0.01刻み）</td>
            <td className="p-2">学習率を制御</td>
            <td className="p-2">0.11</td>
          </tr>
          <tr>
            <td className="p-2">gamma</td>
            <td className="p-2">0（固定）</td>
            <td className="p-2">分割時の最小損失減少量</td>
            <td className="p-2">0</td>
          </tr>
          <tr>
            <td className="p-2">colsample_bytree</td>
            <td className="p-2">1（固定）</td>
            <td className="p-2">各木に使用する特徴量の割合</td>
            <td className="p-2">1</td>
          </tr>
          <tr>
            <td className="p-2">min_child_weight</td>
            <td className="p-2">1（固定）</td>
            <td className="p-2">葉の分割に関する制約</td>
            <td className="p-2">1</td>
          </tr>
          <tr>
            <td className="p-2">subsample</td>
            <td className="p-2">1（固定）</td>
            <td className="p-2">各木に使用する標本の割合</td>
            <td className="p-2">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Parameters;
