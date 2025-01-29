"use client";

import React from "react";

import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useRouter } from "next/navigation";

function RiveBtn() {
  const router = useRouter();

  const stateMachineName = "AL";
  const stateMachineInputName = "click";
  const { rive, RiveComponent } = useRive({
    src: "AlumniLink.riv",
    stateMachines: stateMachineName,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
  });
  const PressedInput = useStateMachineInput(
    rive,
    stateMachineName,
    stateMachineInputName
  );

  const onClickBtn = () => {
    PressedInput?.fire();
    setTimeout(() => {
      router.push("/info?page=0&size=0");
    }, 1000);
  };
  return (
    <div className="w-64 h-64 flex justify-center items-center cursor-pointer">
      <RiveComponent onClick={onClickBtn} />
    </div>
  );
}

export { RiveBtn };
