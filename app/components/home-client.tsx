"use client";

import { useState } from "react";
import { IBestSellerInfo } from "../types/interfaces";
import NavBarList from "./navbar-list";
import { RecoilRoot } from "recoil";
import MiniModal from "./mini-modal";
import NavBarTitle from "./navbar-title";
import NavBarPages from "./navbar-pages";

export default function HomeClient({ infos }: { infos: IBestSellerInfo[] }) {
  return (
    <RecoilRoot>
      <div className="grid h-screen grid-cols-12 gap-1.5 overflow-hidden p-8">
        <div className="col-span-3 h-screen overflow-hidden">
          <NavBarTitle />
          <div className="mt-5 h-2/6">
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
          <div className="mt-5 h-2/6">
            <NavBarPages />
          </div>
        </div>
        <div className="relative col-span-9">
          <MiniModal />
        </div>
      </div>
    </RecoilRoot>
  );
}
