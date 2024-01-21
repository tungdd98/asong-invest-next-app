"use client";
import { Post } from "@/types/post.types";
import React, { FC, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

interface PostItemProps {
  data: Post;
}

const PostItem: FC<PostItemProps> = ({ data }) => {
  console.log(data);
  const [imageUrl, setImageUrl] = useState("");

  const getImageUrl = useCallback(async () => {
    if (!data._links["wp:attachment"].length) {
      return;
    }

    const res = await fetch(data._links["wp:attachment"][0].href);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await res.json();

    if (result.length) {
      setImageUrl(result[0].source_url);
    }
  }, [data._links]);

  useEffect(() => {
    getImageUrl();
  }, [getImageUrl]);

  return (
    <article className="c-transition group bg-white border overflow-hidden hover:bg-gray-200 hover:shadow-lg rounded-[10px]">
      <div className="overflow-hidden">
        {imageUrl ? (
          <Image
            className="object-cover c-transition w-full h-full aspect-video group-hover:scale-110"
            src={imageUrl}
            alt={data.title.rendered}
            width={500}
            height={500}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full aspect-video bg-gray-300 rounded">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4 pt-2 lg:p-5">
        <h3 className="font-bold text-lg c-transition line-clamp-2 text-justify hover:text-primary">
          <Link href={`/news/${data.slug}`} itemProp="url">
            <span itemProp="headline">{data.title.rendered}</span>
          </Link>
        </h3>
        <div
          dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
          className="text-sm my-4 line-clamp-2 text-justify"
        ></div>
        <div>
          <div className="flex items-center text-primary">
            <i className="icon icon-calendar_today"></i>
            <span className="ml-2">{format(data.date, "dd/MM/yyyy")}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
