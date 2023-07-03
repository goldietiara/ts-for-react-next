import React from "react";
import PostCard from "../../components/postCard/page";
import CardProps from "../types/types";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("CAN'T FECTH DATA");
  }
  return res.json();
};

const Post = async () => {
  const data = await getData();

  return (
    <div className="grid grid-col1 gap-5 lg:grid-cols-2 lg:gap-10 lg:px-20 bg-slate-50 py-10 px-5">
      {data.map((post: CardProps) => {
        // {data.map((post: {id: number; title: string; body:string}) => { */

        return <PostCard key={data.id} {...post}></PostCard>;
      })}
    </div>
  );
};

export default Post;
