"use client";

import React, { useState } from "react";

import { SignInView } from "@/views/sign/ui/SignInView";
import { SignUpView } from "@/views/sign/ui/SignUpView";

export default function Alumnilink_Sign_Page() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  return (
    <div className="container px-36 py-20 w-screen h-screen flex justify-center items-center duration-300">
      <div className="relative w-[800px] h-[400px] flex justify-center items-center bg-gray-200">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <h2>Already Have an Account?</h2>
          <button
            type="button"
            className="w-24 h-12 rounded-xl flex justify-center items-center shadow-lg duration-300 hover:scale-105 bg-blue-200"
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-10">
          <h2 className="font-studioSans font-bold text-xl text-black">
            Don't Have an Account?
          </h2>
          <button
            type="button"
            className="w-24 h-12 rounded-xl flex justify-center items-center shadow-lg duration-300 hover:scale-105 bg-blue-200"
            onClick={() => setIsSignUp(true)}
          >
            <span className="font-studioSans font-semibold text-lg text-black">
              Sign Up
            </span>
          </button>
        </div>
        <div
          className={`absolute px-10 py-20 w-[350px] h-[480px] z-1000 shadow-xl rounded-lg bg-white duration-300 ${
            isSignUp ? "animate-slideIn right-12" : "animate-slideIn left-12"
          }`}
        >
          {isSignUp ? <SignUpView /> : <SignInView />}
        </div>
      </div>
    </div>
  );
}
