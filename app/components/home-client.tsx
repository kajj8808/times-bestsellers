"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IBestSellerInfo } from "../types/interfaces";
import Link from "next/link";
import NavBarList from "./navbar-list";
import { RecoilRoot } from "recoil";
import MiniModal from "./mini-modal";
import NavBarTitle from "./navbar-title";
import NavBarPages from "./navbar-pages";

export default function HomeClient({ infos }: { infos: IBestSellerInfo[] }) {
  /** 호버된 아이템( 카테고리 )를 확인하기 위해서 사용합니다. */
  const [currentHoveredItem, setCurrentHoveredItem] =
    useState<IBestSellerInfo | null>(null);

  return (
    <RecoilRoot>
      <div className="grid grid-cols-12 h-screen overflow-hidden p-5">
        <div className="col-span-3 h-screen overflow-hidden">
          <NavBarTitle />
          <div className="h-2/6">
            <NavBarList
              title="Category"
              items={infos.map((info) => {
                return {
                  title: info.display_name,
                  subtitle: `${info.newest_published_date}`,
                  link: `list/${info.list_name_encoded}`,
                };
              })}
            />
          </div>
          <div className="h-2/6">
            <NavBarPages />
          </div>
        </div>
        <div className="col-span-9 relative">
          <MiniModal />
        </div>
      </div>
    </RecoilRoot>
  );
}
