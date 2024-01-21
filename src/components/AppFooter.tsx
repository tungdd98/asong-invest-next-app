import { MENUS } from "@/constants";
import React, { FC } from "react";
import clsx from "clsx";
import Link from "next/link";

const AppFooter: FC = () => {
  return (
    <footer className="bg-[#333] text-[#ddd]">
      <div className="container px-4 mx-auto grid grid-cols-1 gap-8 py-8 text-center md:text-left md:grid-cols-2">
        <div className="col-span-1">
          <h2 className="text-2xl font-medium mb-5">Asong Invest Co., Ltd</h2>
          <div className="mb-3 flex justify-center md:justify-start">
            <i className="icon icon-location_on icon-lg mr-2 mt-[2px]"></i>
            <span>
              15F Tower 2, Capital Place, 29 Lieu Giai, Ba Dinh, Hanoi, Vietnam
            </span>
          </div>
          <div className="mb-3 flex items-center justify-center md:justify-start">
            <i className="icon icon-web icon-lg mr-2"></i>
            <a
              className="underline"
              href="https://www.asonginvest.com"
              target="_blank"
              rel="noreferrer"
            >
              www.asonginvest.com
            </a>
          </div>
          <div className="mb-3 flex items-center justify-center md:justify-start">
            <i className="icon icon-mail icon-lg mr-2"></i>
            <span>
              Email:&nbsp;
              <a className="underline" href="mailto:office@asonginvest.com">
                office@asonginvest.com
              </a>
            </span>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div className="flex flex-row justify-center md:justify-end">
              {MENUS.map((item, index) => (
                <div
                  key={item.label}
                  className={clsx("mb-3", index < MENUS.length && "mr-4")}
                >
                  <Link className="capitalize" href={item.path}>
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-4 border-t border-white">
        &copy; Copyright by Asong Invest
      </div>
    </footer>
  );
};

export default AppFooter;
