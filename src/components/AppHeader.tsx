"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";
import { MENUS } from "@/constants";
import clsx from "clsx";

const AppHeader: FC = () => {
  const [isShowNavSP, setIsShowNavSP] = useState(false);

  const toggleNavSP = () => {
    setIsShowNavSP(prev => !prev);
  };

  return (
    <>
      <header className="shadow-md sticky top-0 bg-white z-20">
        <div className="container px-4 mx-auto flex justify-between items-center py-2">
          <Link href="/">
            <Image
              className="object-cover w-[60px] md:pl-0 md:w-[120px]"
              src={logo}
              alt="logo"
            />
          </Link>
          <span className="md:hidden" onClick={toggleNavSP}>
            <i className="icon icon-menu icon-32 cursor-pointer px-5 block"></i>
          </span>
          <nav className="hidden md:flex">
            {MENUS.map(item => (
              <div className="mx-7" key={item.label}>
                <span className="nav-item-header transition-header pb-3 border-b-2 border-white hover:border-primary hover:pb-1">
                  <Link className="text-xl uppercase" href={item.path}>
                    {item.label}
                  </Link>
                </span>
              </div>
            ))}
          </nav>
        </div>
      </header>

      <nav
        className={clsx(
          "fixed top-0 bottom-0 transition-all bg-white z-50 p-5 -left-[300px] w-[300px] md:hidden",
          isShowNavSP && "active",
        )}
        id="nav-sp"
      >
        <div className="flex justify-end mb-4">
          <i
            onClick={toggleNavSP}
            className="icon icon-close icon-32 cursor-pointer"
          ></i>
        </div>
        <div className="flex-col flex relative">
          {MENUS.map(item => (
            <div className="mb-3" key={item.label}>
              <span className="nav-item-header transition-header pb-3 border-b-2 border-white hover:border-primary hover:pb-1">
                <Link className="text-xl uppercase" href={item.path}>
                  {item.label}
                </Link>
              </span>
            </div>
          ))}
        </div>
      </nav>

      <div
        className={clsx(
          "fixed z-10 top-0 bottom-0 left-0 right-0 bg-black/50",
          isShowNavSP ? "block" : "hidden",
        )}
      ></div>
    </>
  );
};

export default AppHeader;
