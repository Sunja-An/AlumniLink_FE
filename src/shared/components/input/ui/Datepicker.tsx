"use client";

import React, { type ChangeEvent } from "react";

type DatePickerType = {
  title: string;
  value: string | number | string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Datepicker({ title, onChange, value }: DatePickerType) {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  const localISOTime = new Date(date.getTime() - offset)
    .toISOString()
    .slice(0, 16);

  return (
    <div className="w-full flex flex-col justify-start items-start gap-3">
      <div className="w-full flex justify-start itmes-center">
        <span className="font-pretendard font-bold text-sm text-black">
          {title}
        </span>
      </div>
      <div className="w-full flex justify-start items-center gap-2">
        <input
          type="datetime-local"
          name="deadline"
          onChange={onChange}
          value={value}
          min={localISOTime}
          className="min-w-60 w-60 h-10 flex justify-center items-center font-pretendard font-bold text-sm text-black rounded-md bg-transparent border border-black"
          required
        />
      </div>
    </div>
  );
}

export { Datepicker };
