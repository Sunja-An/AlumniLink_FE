import { Header } from "@/shared/components";
import { OptionHamburger } from "@/widgets/hamburger";
import { type ReactNode } from "react";

type T_CustomHamburgerLayout = {
  isHeader?: boolean;
  isHamburger?: boolean;
  children: ReactNode;
};

function CustomHamburgerLayout({
  children,
  isHamburger,
  isHeader,
}: T_CustomHamburgerLayout) {
  return (
    <div className="relative w-screen bg-gradient-to-r from-[#D3CCE3] to-[#E9E4F0]">
      {isHeader && <Header />}
      <main className="relative px-32 py-10 w-full flex justify-center items-start gap-8">
        {children}
        {isHamburger && <OptionHamburger />}
      </main>
    </div>
  );
}

export { CustomHamburgerLayout };
