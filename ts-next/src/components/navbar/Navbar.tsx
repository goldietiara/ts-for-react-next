import React from "react";
import Link from "next/link";
const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      title: "home",
      url: "/home",
    },
    {
      id: 2,
      title: "about",
      url: "/about",
    },
    {
      id: 3,
      title: "posts",
      url: "/posts",
    },
    {
      id: 4,
      title: "contact",
      url: "/contact",
    },
  ];

  return (
    <div className=" bg-pink-100 w-full h-fit py-2 px-5 flex justify-between">
      <div className=" font-medium">devbyodi</div>
      <div className="flex gap-5">
        {/* {navLinks.map((links:{id:number; title:string; url:string})=>{
          return <div href={navLinks.url}></div>
        })} */}
        <div>home</div>
        <div>about</div>
        <div>posts</div>
        <div>contact</div>
      </div>
    </div>
  );
};

export default Navbar;
