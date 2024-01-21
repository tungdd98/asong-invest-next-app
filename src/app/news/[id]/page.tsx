import { Post } from "@/types/post.types";
import React, { FC } from "react";
import BannerOffice from "@/components/BannerOffice";
import { format } from "date-fns";
import PostItem from "@/components/PostItem";

const getData = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getAllPost = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

interface NewsDetailPageProps {
  params: { id: string };
}

const NewsDetailPage: FC<NewsDetailPageProps> = async ({ params }) => {
  const data: Post = await getData(params.id);
  const allPost: Post[] = await getAllPost();
  const otherPosts = allPost.filter(item => item.id !== Number(params.id));

  if (!data) {
    return <div>Error</div>;
  }

  return (
    <>
      <BannerOffice />

      <div className="container">
        <div className="my-14 text-justify">
          <h3 className="text-2xl font-semibold">{data.title.rendered}</h3>
          <span className="flex items-center mt-3">
            <i className="icon icon-calendar_today mr-3"></i>
            <span>{format(data.date, "dd/MM/yyyy")}</span>
          </span>
          <div
            className="my-5"
            dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
          ></div>
          <div
            className="mb-5"
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          ></div>

          <div className="text-xl font-semibold pb-4 border-b-2">
            Other News
          </div>
          <section className="grid grid-cols-1 gap-5 my-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            {otherPosts.map(item => (
              <PostItem key={item.id} data={item} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default NewsDetailPage;
