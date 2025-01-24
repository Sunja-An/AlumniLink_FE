import { Header } from "@/shared/components";
import { type ReactNode } from "react";

type T_CustomLayout = {
  isHeader: boolean;
  children: ReactNode;
};

function CustomLayout({ isHeader, children }: T_CustomLayout) {
  return (
    <div
      className={`relative w-screen bg-gradient-to-r from-[#D3CCE3] to-[#E9E4F0] ${
        !isHeader && "flex justify-center items-center"
      }`}
    >
      {isHeader && <Header />}
      <div className="px-32 py-10">{children}</div>
    </div>
  );
}

export { CustomLayout };
