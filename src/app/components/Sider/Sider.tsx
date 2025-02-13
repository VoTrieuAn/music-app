"use client";

import { SiderLogo } from "./SiderLogo";
import { SiderMenu } from "./SiderMenu";

export const Sider = () => {
  return (
    <>
      <div className="bg-[#212121] h-[100vh] fixed w-[280px] ">
        <SiderLogo />
        <SiderMenu />
      </div>
    </>
  );
};
