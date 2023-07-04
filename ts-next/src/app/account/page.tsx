"use client";
import { sign } from "crypto";
import { stringify } from "querystring";
import React, { useRef, useState } from "react";

const Account = () => {
  //   const [username, setUsername] = useState<HTMLInputElement | string>();
  const usernameRef = useRef<HTMLInputElement>(null);
  const [signin, setSignin] = useState("");
  const [profile, setProfile] = useState("hidden");
  const [switchPage, setSwitchPage] = useState(true);

  //   const afterLoginBtn = () => {
  //     setUsername(usernameRef.current?.value);
  //   };

  const loginBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // afterLoginBtn;
    alert(`you've been loggen in to ${usernameRef.current?.value}`);
    // alert(`you've been loggen in to ${username}`);
    setSwitchPage(!switchPage);
    switchPage ? setSignin("hidden") : setSignin("");
    switchPage ? setProfile("") : setProfile("hidden");
  };

  const logoutBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(`Hi ${usernameRef.current?.value}, you've been logged out`);
    setSwitchPage(!switchPage);
    switchPage ? setSignin("hidden") : setSignin("");
    switchPage ? setProfile("") : setProfile("hidden");
  };
  //   const logoutBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     alert(`Hi ${usernameRef.current?.value}, you've been logged out`);
  //     setSwitchPage(!switchPage);
  //     switchPage ? setProfile("hidden") : setProfile("");
  //     switchPage ? setSignin("") : setSignin("hidden");
  //   };

  return (
    <div>
      {/* SIGN IN PAGE */}
      <div className={`w-full h-96 flex justify-center items-center ${signin}`}>
        <form action="" className="grid grid-cols-1 w-80">
          <h1 className=" text-lg font-medium">Sign In</h1>
          <input
            type="text"
            placeholder="username"
            className=" px-3 py-1 overflow-auto relative border-b-2 my-3"
            ref={usernameRef}
          />
          <input
            type="text"
            placeholder="password"
            className=" px-3 py-1 overflow-auto relative border-b-2"
          />
          <button
            className="px-5 py-3 bg-pink-100 hover:bg-pink-200 mt-5 mb-2"
            onClick={loginBtn}
          >
            login
          </button>
          <p>
            don't have an account yet? please{" "}
            <span className="underline hover:font-medium hover cursor-pointer">
              Sign Up
            </span>
          </p>
        </form>
      </div>
      {/* PROFILE PAGE */}
      <div
        className={`w-full h-96 flex justify-center items-center ${profile}`}
      >
        <div>
          <h1 className=" text-lg font-medium">
            Hi {usernameRef.current?.value}, Welcome to devbyodi
          </h1>
          <button
            className="px-5 py-3 bg-pink-100 hover:bg-pink-200 mt-5 mb-2"
            onClick={logoutBtn}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
