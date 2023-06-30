"use client";
import React, { useRef, useState } from "react";

const Contact = () => {
  const [data, setData] = useState("Posts");
  const [input, setInput] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setData(input);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="px-20 py-10 gap-5 flex flex-col">
      <form className="flex w-full h-10 justify-center shadow-lg mb-5">
        <input
          type="text"
          className=" relative h-full w-full p-3"
          placeholder="search here!"
          onChange={handleInput}
        />
        <button
          onClick={handleClick}
          className=" w-fit h-full px-5 bg-pink-100 hover:bg-pink-200"
        >
          send
        </button>
      </form>
      <div>
        <div className=" font-medium text-3xl mb-5">{data}</div>
        <div className=" text-justify leading-relaxed pb-5">
          <h1 className="underline text-lg"> Lorem ipsum dolor</h1>
          <p>
            sit amet consectetur, adipisicing elit. Doloremque esse aperiam et,
            reprehenderit fuga quasi nemo vel, tempore iste quam, nam
            consequatur vitae. Voluptate iusto repellendus, nulla necessitatibus
            fuga facere!
          </p>
        </div>
        <div className=" text-justify leading-relaxed pb-5">
          <h1 className="underline text-lg"> Lorem ipsum dolor</h1>
          <p>
            sit amet consectetur, adipisicing elit. Doloremque esse aperiam et,
            reprehenderit fuga quasi nemo vel, tempore iste quam, nam
            consequatur vitae. Voluptate iusto repellendus, nulla necessitatibus
            fuga facere!
          </p>
        </div>
        <div className=" text-justify leading-relaxed pb-5">
          <h1 className="underline text-lg"> Lorem ipsum dolor</h1>
          <p>
            sit amet consectetur, adipisicing elit. Doloremque esse aperiam et,
            reprehenderit fuga quasi nemo vel, tempore iste quam, nam
            consequatur vitae. Voluptate iusto repellendus, nulla necessitatibus
            fuga facere!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
