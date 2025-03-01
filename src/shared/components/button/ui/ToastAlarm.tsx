"use client";

import React from "react";
import { ToastContentProps } from "react-toastify";

interface ToastAlarm extends ToastContentProps {
  content?: string;
}

function ToastAlarm({ content }: ToastAlarm) {
  return (
    <div className="px-10 py-4 min-w-40 w-40 min-h-16 h-16 flex justify-between items-center bg-white">
      <span className="font-studioSans font-bold text-base text-black">
        {content ?? "Success!"}
      </span>
    </div>
  );
}

export { ToastAlarm };
