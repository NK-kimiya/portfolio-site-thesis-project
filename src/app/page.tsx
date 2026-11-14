import Header from "@/components/Header";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#2a4073]">
      <Header />
      <div className="text-white py-10">
        <div className="w-5/6 mx-auto ">
          <h1 className="text-4xl lg:text-6xl py-5">
            統計解析と機械学習を用いた深刻な精神的苦痛の関連要因の探索
          </h1>
          <p className="p-3">
            2024年米国National Health Interview
            Survey（NHIS）のデータを用い、ロジスティック回帰分析とXGBoostにより、深刻な精神的苦痛（SPD）に関連する要因を多角的に検討しました
          </p>
          <div className="py-5">
            <button className="border-1 border-white px-10 py-3 rounded-4xl">
              <Link href="/overview">研究を見る</Link>
            </button>
          </div>
        </div>
        <div className="w-5/6 mx-auto lg:flex lg:justify-start my-10">
          <div className="w-5/6 md:w-full lg:w-80 mx-auto lg:mx-1 mt-2 xl:w-70 bg-[#F0F1FC] p-10 text-[#2a4073]">
            <h3 className="text-xl">分野</h3>
            <p>医療データサイエンス</p>
          </div>
          <div className="w-5/6 md:w-full lg:w-80 mx-auto lg:mx-1 mt-2 xl:w-70 bg-[#F0F1FC] p-10 text-[#2a4073]">
            <h3 className="text-xl">使用技術</h3>
            <p>統計解析・機械学習・説明可能なAI(XAI)</p>
          </div>
          <div className="w-5/6 md:w-full lg:w-80 mx-auto lg:mx-1 mt-2 xl:w-70 bg-[#F0F1FC] p-10 text-[#2a4073]">
            <h3 className="text-xl">研究期間</h3>
            <p>2026年4月～2026年8月</p>
          </div>
        </div>
      </div>
    </div>
  );
}
