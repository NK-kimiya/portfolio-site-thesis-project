import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <header className="lg:flex lg:justify-between bg-[#2a4073] text-white py-4">
        <div className="lg:flex-1">
          <h1 className="text-2xl text-center py-3">Thesis Project</h1>
        </div>
        <div className="lg:flex-2 overflow-x-auto">
          <nav>
            <ul className="flex lg:justify-around text-nowrap">
              <li className="px-3 pb-4">
                <Link href="/">トップ</Link>
              </li>
              <li className="px-3 pb-4">
                <Link href="/overview">概要</Link>
              </li>
              <li className="px-3">
                <Link href="/preprocessing">前処理</Link>
              </li>
              <li className="px-3">
                <Link href="/statistics">統計的有意</Link>
              </li>
              <li className="px-3">
                <Link href="/xgboost">XGboost</Link>
              </li>
              <li className="px-3">
                <Link href="/analysis">予測寄与と交互作用</Link>
              </li>
              <li className="px-3">
                <Link href="/summary">まとめ・総合考察</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
