"use client";

import { FaHouse, FaRightFromBracket, FaUserPlus } from "react-icons/fa6";
import { FaMusic, FaHeart, FaPodcast, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "@/app/firebase.config";
import { SiderItem } from "./SiderItem";
export const SiderMenu = () => {
  const [isLogin, setIsLogin] = useState<boolean>();

  const menu = [
    {
      icon: (
        <>
          <FaHouse />
        </>
      ),
      title: "Trang chủ",
      link: "/",
    },
    {
      icon: (
        <>
          <FaMusic />
        </>
      ),
      title: "Danh mục bài hát",
      link: "/categories",
    },
    {
      icon: (
        <>
          <FaPodcast />
        </>
      ),
      title: "Ca sĩ",
      link: "/singers",
    },
    {
      icon: (
        <>
          <FaHeart />
        </>
      ),
      title: "Bài hát yêu thích",
      link: "/wishlist",
      isLogin: true,
    },
    {
      icon: (
        <>
          <FaRightFromBracket />
        </>
      ),
      title: "Đăng xuất",
      link: "/logout",
      isLogin: true,
    },
    {
      icon: (
        <>
          <FaUser />
        </>
      ),
      title: "Đăng nhập",
      link: "/login",
      isLogin: false,
    },
    {
      icon: (
        <>
          <FaUserPlus />
        </>
      ),
      title: "Đăng ký",
      link: "/register",
      isLogin: false,
    },
  ];

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return (
    <>
      <nav className="py-[30px] px-[20px]">
        <ul>
          {menu.map((item: any, index: any) => (
            <SiderItem item={item} isLogin={isLogin} key={index} />
          ))}
        </ul>
      </nav>
    </>
  );
};
