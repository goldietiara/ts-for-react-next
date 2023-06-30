import React from "react";

const PostCard = (props: { title: string; body: string }) => {
  return (
    <div className="flex flex-col text-left w-full h-fit gap-1 p-5 shadow-md shadow-gray-50  ">
      <h1 className="font-medium text-2xl">{props.title}</h1>
      <p className=" self-start text-xs">{props.body}</p>
    </div>
  );
};

export default PostCard;
