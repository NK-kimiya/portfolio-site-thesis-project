import React from "react";
import type { ReactNode } from "react";

type TableRow = {
  variableName: string;
  analysisValue: ReactNode;
  dataType: "numeric" | "factor";
  measurementScale: string;
};

const tableRows: TableRow[] = [
  {
    variableName: "K6SPD_A",
    analysisValue: "0/1",
    dataType: "numeric",
    measurementScale: "二値尺度",
  },
  {
    variableName: "LONELY_A",
    analysisValue: "1〜5",
    dataType: "numeric",
    measurementScale: "順序尺度",
  },
  {
    variableName: "FDSBALANCE_A",
    analysisValue: "1～3",
    dataType: "numeric",
    measurementScale: "順序尺度（1～3）",
  },
  {
    variableName: "SLPREST_A",
    analysisValue: "1～4",
    dataType: "numeric",
    measurementScale: "順序尺度",
  },
  {
    variableName: "FGEFRQTRD_A",
    analysisValue: "1～4",
    dataType: "numeric",
    measurementScale: "順序尺度",
  },
  {
    variableName: "SOCERRNDS_A",
    analysisValue: "1～4",
    dataType: "numeric",
    measurementScale: "順序尺度",
  },
  {
    variableName: "LSATIS4_A",
    analysisValue: "1～4",
    dataType: "numeric",
    measurementScale: "順序尺度",
  },
  {
    variableName: "DEPMED_A",
    analysisValue: "Yes/No",
    dataType: "factor",
    measurementScale: "名義尺度（二値）",
  },
  {
    variableName: "ANXFREQ_A",
    analysisValue: "1～5",
    dataType: "numeric",
    measurementScale: "順序尺度",
  },
  {
    variableName: "SOCSCLPAR_A",
    analysisValue: "1～4",
    dataType: "numeric",
    measurementScale: "順序尺度",
  },
  {
    variableName: "DEPFREQ_A",
    analysisValue: "1～5",
    dataType: "numeric",
    measurementScale: "順序尺度",
  },
  {
    variableName: "SEX_A",
    analysisValue: "Male/Female",
    dataType: "factor",
    measurementScale: "名義尺度（二値）",
  },
  {
    variableName: "AGEP_A",
    analysisValue: "18～85",
    dataType: "numeric",
    measurementScale: "数値尺度（年齢）",
  },
];
const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#eaedf7] text-[#1B2340]">
            <th className="border border-gray-300 p-3 text-left">変数名</th>
            <th className="border border-gray-300 p-3 text-left">分析時の値</th>
            <th className="border border-gray-300 p-3 text-left">
              Rのデータ型
            </th>
            <th className="border border-gray-300 p-3 text-left">統計的尺度</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr key={row.variableName}>
              <td className="border border-gray-300 p-3 font-medium">
                {row.variableName}
              </td>
              <td className="border border-gray-300 p-3">
                {row.analysisValue}
              </td>

              <td className="border border-gray-300 p-3">
                <span
                  className={
                    row.dataType === "numeric"
                      ? "text-blue-700"
                      : "text-green-700"
                  }
                >
                  {row.dataType}
                </span>
              </td>
              <td className="border border-gray-300 p-3">
                {row.measurementScale}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
