import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-pink-100 w-full h-fit py-2 px-5 flex justify-between">
      <div className=" font-medium">devbyodi</div>
      <div className="flex gap-5">
        <div>home</div>
        <div>about</div>
        <div>contact</div>
      </div>
    </div>
  );
};

export default Navbar;
