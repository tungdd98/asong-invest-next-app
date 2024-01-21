import React, { FC } from "react";

import { Post } from "@/types/post.types";
import bannerOffice from "@/assets/images/banner-office-3.png";
import PostItem from "@/components/PostItem";

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const NewsPage: FC = async () => {
  const posts: Post[] = await getData();

  return (
    <>
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

      <div className="container">
        <div className="my-14">
          <section className="grid grid-cols-1 gap-5 my-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            {posts.map(item => (
              <PostItem key={item.id} data={item} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
