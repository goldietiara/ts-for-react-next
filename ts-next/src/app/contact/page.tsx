"use client";
import React, { useRef, useState } from "react";

const Contact = () => {
  const [title, setTitle] = useState("Lorem ipsum dolor");
  const [inputTitle, setInputTitle] = useState("");
  const [desc, setDesc] = useState(
    `sit amet consectetur, adipisicing elit. Doloremque esse aperiam et, reprehenderit fuga quasi nemo vel, tempore iste quam, nam consequatur vitae. Voluptate iusto repellendus, nulla necessitatibus fuga facere!`
  );
  const [inputDesc, setInputDesc] = useState("");
  const [btnEdit, setBtnEdit] = useState("");
  const [btnClose, setBtnClose] = useState("hidden");
  const [hidBtn, setHidBtn] = useState(true);
  // const [hidBtn2, setHidBtn2] = useState(false);

  // const [inputDesc, setInputDesc] = useState("");
  // const titleRef = useRef<string>();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTitle(inputTitle);
    setDesc(inputDesc);
    setHidBtn(!hidBtn);
    hidBtn ? setBtnClose("") : setBtnClose("hidden");
    hidBtn ? setBtnEdit("hidden") : setBtnEdit("");
    alert("contact details has been updated");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleInputDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputDesc(e.target.value);
  };

  return (
    <div className="px-20 py-5  flex flex-col">
      <div>
        <div className=" font-medium text-3xl mb-5">Contact</div>
        <div className={`text-justify leading-relaxed pb-5 ${btnEdit}`}>
          <div className=" flex text-lg gap-3 justify-between">
            <h1 className="font-medium">{title}</h1>
            <button
              className={` text-sm underline text-gray-400 hover:text-inherit cursor-pointer self-center ${btnEdit}`}
              onClick={() => {
                setHidBtn(!hidBtn);
                hidBtn ? setBtnEdit("hidden") : setBtnEdit("");
                hidBtn ? setBtnClose("") : setBtnClose("hidden");
              }}
            >
              edit
            </button>
          </div>
          <p>{desc}</p>
        </div>
      </div>
      <div className={`${btnClose}`}>
        <div className=" flex text-lg justify-between pb-5">
          <h1>Edit Contact</h1>
          <button
            className={` text-sm underline text-gray-400 hover:text-inherit cursor-pointer self-center ${btnClose}`}
            onClick={() => {
              setHidBtn(!hidBtn);
              hidBtn ? setBtnClose("") : setBtnClose("hidden");
              hidBtn ? setBtnEdit("hidden") : setBtnEdit("");
            }}
          >
            close
          </button>
        </div>
        <form className="flex flex-col justify-center">
          <h1 className=" text-md text-left pb-2">Title</h1>
          <input
            type="text"
            className="  h-10 w-full p-3 shadow-md "
            placeholder={title}
            onChange={handleInput}
          />
          <h1 className=" text-md text-left pb-2 mt-5">Details</h1>
          <textarea
            name="text area"
            id=""
            cols={30}
            rows={10}
            className="  h-full w-full p-3 shadow-md"
            placeholder={desc}
            onChange={handleInputDesc}
          ></textarea>

          <button
            onClick={handleClick}
            // onClick={() => {
            //   handleClick;
            //   setTitle(inputTitle);
            //   setHidBtn(!hidBtn);
            //   hidBtn ? setBtnClose("") : setBtnClose("hidden");
            //   hidBtn ? setBtnEdit("hidden") : setBtnEdit("");
            //   alert("contact details has been updated");
            // }}
            className=" self-end w-fit h-fit px-5 py-3 bg-pink-100 hover:bg-pink-200 shadow-md mt-5"
          >
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
