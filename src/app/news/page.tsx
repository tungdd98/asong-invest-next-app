import React, { FC } from "react";

import BannerOffice from "@/components/BannerOffice";
import { Post } from "@/types/post.types";
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
      <BannerOffice />

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
