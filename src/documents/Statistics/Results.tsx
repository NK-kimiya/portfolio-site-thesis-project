import React from "react";

const Results = () => {
  return (
    <>
      <div className="overflow-x-auto py-10">
        <table className="table-auto w-[800px] mx-auto">
          <thead className="bg-[#2a4073] text-white">
            <tr>
              <th className="p-2 border-r-1 border-white">変数名</th>
              <th className="p-2 border-r-1 border-white">回帰係数(約)</th>
              <th className="p-2 border-r-1 border-white">オッズ比(OR)(約)</th>
              <th className="p-2 border-r-1 border-white">95％信頼区間(OR)</th>
              <th className="p-2 border-r-1 border-white">p値</th>
              <th className="p-2">解釈</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">孤独感（LONELY_A）</td>
              <td className="p-2">+0.456</td>
              <td className="p-2">1.578</td>
              <td className="p-2">1.437～1.733</td>
              <td className="p-2">3.022255e-20 ＜ 0.05</td>
              <td className="p-2">
                孤独感が1段階高くなると、深刻な精神的苦痛のオッズが約1.58倍となる
              </td>
            </tr>
            <tr>
              <td className="p-2">食事の確保困難（FDSBALANCE_A）</td>
              <td className="p-2">−0.374</td>
              <td className="p-2">0.688</td>
              <td className="p-2">0.592～0.801</td>
              <td className="p-2">1.536164e-06 ＜ 0.05</td>
              <td className="p-2">
                食事の確保困難が1段階少なくなると、深刻な精神的苦痛のオッズが約31.2％低くなるという関連がある
              </td>
            </tr>
            <tr>
              <td className="p-2">快眠（SLPREST_A）</td>
              <td className="p-2">0.820</td>
              <td className="p-2">0.688</td>
              <td className="p-2">0.719～0.935</td>
              <td className="p-2">3.123904e-03 ＜ 0.05</td>
              <td className="p-2">
                十分に休息できた状態で目覚める頻度が1段階高くなると、深刻な精神的苦痛のオッズが約18.0％低いという関連がある。
              </td>
            </tr>
            <tr>
              <td className="p-2">疲労感（FGEFRQTRD_A）</td>
              <td className="p-2">+0.498</td>
              <td className="p-2">1.646</td>
              <td className="p-2">1.464～1.850</td>
              <td className="p-2">3.994608e-16 ＜ 0.05</td>
              <td className="p-2">
                疲労感を感じる頻度が1段階高くなると、深刻な精神的苦痛のオッズが約1.65倍（約64.6％高い）になるという関連がある
              </td>
            </tr>
            <tr>
              <td className="p-2">用事の困難度（SOCERRNDS_A）</td>
              <td className="p-2">+0.207</td>
              <td className="p-2">1.230</td>
              <td className="p-2">1.048～1.443</td>
              <td className="p-2">1.133189e-02 ＜ 0.05</td>
              <td className="p-2">
                一人で買い物や用事を済ませる際の困難が1段階大きくなると、深刻な精神的苦痛のオッズが約1.23倍（約23％高い）になるという関連が認められました。
              </td>
            </tr>
            <tr>
              <td className="p-2">服薬（DEPMED_A）</td>
              <td className="p-2">+0.092</td>
              <td className="p-2">1.096</td>
              <td className="p-2">0.876～1.372</td>
              <td className="p-2">4.223586e-01 ＜ 0.05</td>
              <td className="p-2">統計的に有意な関連は認められなかった。</td>
            </tr>
            <tr>
              <td className="p-2">不安や緊張の頻度（ANXFREQ_A）</td>
              <td className="p-2">+0.522</td>
              <td className="p-2">1.686</td>
              <td className="p-2">1.473～1.930</td>
              <td className="p-2">1.232952e-13 ＜ 0.05</td>
              <td className="p-2">
                不安を感じる頻度が1段階高くなると、深刻な精神的苦痛のオッズが約1.69倍（約68.6％高い）になるという関連が認められた
              </td>
            </tr>

            <tr>
              <td className="p-2">社会活動（SOCSCLPAR_A）</td>
              <td className="p-2">+0.422</td>
              <td className="p-2">1.525</td>
              <td className="p-2">1.318～1.765</td>
              <td className="p-2">2.095168e-08 ＜ 0.05</td>
              <td className="p-2">
                社会活動への参加の困難が1段階大きくなると、深刻な精神的苦痛のオッズが約1.53倍（約52.5％高い）になるという関連があった。
              </td>
            </tr>

            <tr>
              <td className="p-2">性別（SEX_A）</td>
              <td className="p-2">−0.061</td>
              <td className="p-2">0.941</td>
              <td className="p-2">0.771～1.149</td>
              <td className="p-2">5.510580e-01 ＜ 0.05</td>
              <td className="p-2">統計的に有意な関連は認められなかった。</td>
            </tr>

            <tr>
              <td className="p-2">性別（SEX_A）</td>
              <td className="p-2">−0.0219</td>
              <td className="p-2">0.978</td>
              <td className="p-2">0.973～0.984</td>
              <td className="p-2">8.621838e-14 ＜ 0.05</td>
              <td className="p-2">
                年齢が1歳高くなるごとに、深刻な精神的苦痛のオッズが約2.2％低いという関連があった。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto py-10">
        <p>各説明変数のVIFおよびGVIFの値は、以下の通りだった。</p>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="p-2">LONELY_A</th>
              <th className="p-2">FDSBALANCE_A</th>
              <th className="p-2">SLPREST_A</th>
              <th className="p-2">FGEFRQTRD_A</th>
              <th className="p-2">SOCERRNDS_A</th>
              <th className="p-2">LSATIS4_A</th>
              <th className="p-2">DEPMED_A</th>
              <th className="p-2">ANXFREQ_A</th>
              <th className="p-2">SOCSCLPAR_A</th>
              <th className="p-2">DEPFREQ_A</th>
              <th className="p-2">SEX_A</th>
              <th className="p-2">AGEP_A</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">1.357325</td>
              <td className="p-2">1.165608</td>
              <td className="p-2">1.263436</td>
              <td className="p-2">1.257022</td>
              <td className="p-2">1.891544</td>
              <td className="p-2">1.343420</td>
              <td className="p-2">1.463129</td>
              <td className="p-2">1.326962</td>
              <td className="p-2">1.832515</td>
              <td className="p-2">2.001985</td>
              <td className="p-2">1.104907</td>
              <td className="p-2">1.297831</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Results;
