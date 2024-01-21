import React, { FC } from "react";

interface NewsDetailPageProps {
  params: { slug: string };
}

const NewsDetailPage: FC<NewsDetailPageProps> = ({ params }) => {
  return <div>My Post: {params.slug}</div>;
};

export default NewsDetailPage;
