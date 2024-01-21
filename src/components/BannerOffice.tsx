import React, { FC } from "react";
import bannerOffice from "@/assets/images/banner-office-3.png";

const BannerOffice: FC = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat relative pt-[22%] min-h-[200px]"
      style={{
        backgroundImage: `linear-gradient(
              180deg,
              rgba(98, 97, 102, 0.5) 0%,
              rgba(194, 194, 204, 0.25) 100%
            ),
            url(${bannerOffice.src})`,
      }}
    >
      <h2 className="c-title-breadcrumb">news</h2>
    </section>
  );
};

export default BannerOffice;
