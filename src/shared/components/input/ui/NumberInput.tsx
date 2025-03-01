"use client";

import { ICON_ARROW } from "@/shared/constants";
import Image from "next/image";
import React from "react";

type NumberInputType = {
  title: string;
  value: number;
  maxCount: number;
  onChange: (value: number) => void;
  conditionText: string;
};

function NumberInput({
  conditionText,
  onChange,
  maxCount,
  title,
  value,
}: NumberInputType) {
  const onClickPrev = () => {
    if (value === 1) {
      return;
    }
    const curr = value - 1;
    onChange(curr);
  };

  const onClickNext = () => {
    if (value === maxCount) {
      return;
    }

    const curr = value + 1;
    onChange(curr);
  };

  return (
    <div className="w-full flex flex-col justify-start items-start gap-3">
      <div className="w-full flex justify-start itmes-center">
        <span className="font-pretendard font-bold text-sm text-black">
          {title}
        </span>
      </div>
      <div className="w-full flex justify-start items-center gap-2">
        <button type="button" className="w-fit h-fit" onClick={onClickPrev}>
          <Image src={ICON_ARROW} alt="arrow" className="w-4 h-4 rotate-180" />
        </button>
        <input
          type="button"
          name="maxCount"
          max={maxCount}
          value={value}
          data-input-counter
          data-input-counter-min="1"
          data-input-counter-max="10"
          placeholder="1"
          className="w-20 h-10 flex justify-center items-center font-pretendard font-bold text-sm text-white rounded-md bg-softblack"
          required
        />
        <button type="button" className="w-fit h-fit" onClick={onClickNext}>
          <Image src={ICON_ARROW} alt="arrow" className="w-4 h-4 " />
        </button>
      </div>
      <div className="w-full flex justify-start items-center gap-1">
        <div className="min-w-1 w-1 max-w-1 min-h-1 h-1 max-h-1 rounded-full bg-black" />
        <span className="font-pretendard font-bold text-sm text-black">
          {conditionText}
        </span>
      </div>
    </div>
  );
}

export { NumberInput };
