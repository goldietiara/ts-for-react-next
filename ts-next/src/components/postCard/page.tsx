import React from "react";
import CardProps from "@/app/types/types";

const PostCard = ({ title, body }: CardProps) => {
  return (
    <div className="flex flex-col text-left w-full h-fit gap-1 p-5 shadow-md bg-white">
      <h1 className="font-medium text-2xl">{title}</h1>
      <p className=" self-start text-xs">{body}</p>
    </div>
  );
};

export default PostCard;
