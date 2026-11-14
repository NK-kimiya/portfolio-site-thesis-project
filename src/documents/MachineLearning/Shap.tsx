import React from "react";

const Shap = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-[800px] mx-auto">
        <thead>
          <tr>
            <th>変数</th>
            <th>寄与度(SHAP値)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">DEPFREQ_A</td>
            <td className="p-2">1.458757991</td>
          </tr>
          <tr>
            <td className="p-2">ANXFREQ_A</td>
            <td className="p-2">0.601824048</td>
          </tr>
          <tr>
            <td className="p-2">LONELY_A</td>
            <td className="p-2">0.446350316</td>
          </tr>
          <tr>
            <td className="p-2">FGEFRQTRD_A</td>
            <td className="p-2">0.320992129</td>
          </tr>
          <tr>
            <td className="p-2">SLPREST_A</td>
            <td className="p-2">0.200486979</td>
          </tr>
          <tr>
            <td className="p-2">SOCSCLPAR_A</td>
            <td className="p-2">0.18107238</td>
          </tr>
          <tr>
            <td className="p-2">AGEP_A</td>
            <td className="p-2">0.198869536</td>
          </tr>

          <tr>
            <td className="p-2">SOCERRNDS_A</td>
            <td className="p-2">0.194706625</td>
          </tr>
          <tr>
            <td className="p-2">FDSBALANCE_A</td>
            <td className="p-2">0.193397901</td>
          </tr>
          <tr>
            <td className="p-2">LSATIS4_A </td>
            <td className="p-2">0.153503566</td>
          </tr>
          <tr>
            <td className="p-2">DEPMED_A </td>
            <td className="p-2">0.111206311</td>
          </tr>
          <tr>
            <td className="p-2">SEX_A</td>
            <td className="p-2">0.00000000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Shap;
