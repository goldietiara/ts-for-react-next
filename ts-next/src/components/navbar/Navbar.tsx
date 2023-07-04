import React from "react";
import Link from "next/link";
const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      title: "home",
      url: "/",
    },
    {
      id: 2,
      title: "about",
      url: "/about",
    },
    // {
    //   id: 2,
    //   title: "about",
    //   url: "/about",
    // },
    {
      id: 3,
      title: "posts",
      url: "/post",
    },
    {
      id: 4,
      title: "contact",
      url: "/contact",
    },
    {
      id: 5,
      title: "profile",
      url: "/account",
    },
  ];

  return (
    <div className=" bg-pink-100 w-full h-fit py-2 px-5 flex justify-between">
      <a href={"/"} className=" font-medium hover:underline cursor-pointer">
        devbyodi
      </a>
      <div className="flex gap-5">
        {/* {navLinks.map<React.JSX.Element>((links:{id:number; title:string; url:string})=>{ */}
        {navLinks.map((v, i, a) => {
          return (
            <a href={v.url} className="hover:underline cursor-pointer">
              {v.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
