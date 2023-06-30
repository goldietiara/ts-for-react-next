import React from "react";
import PostCard from "./[id]/page";
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
    <div>
      {data.map((post: CardProps) => {
        // {data.map((post: {id: number; title: string; body:string}) => { */

        return <PostCard key={data.id} {...post}></PostCard>;
      })}
    </div>
  );
};

export default Post;
