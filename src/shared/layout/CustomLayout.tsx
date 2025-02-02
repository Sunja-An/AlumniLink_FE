import { Hamburger, Header } from "@/shared";
import { type ReactNode } from "react";

type T_CustomLayout = {
  isHeader: boolean;
  children: ReactNode;
};

function CustomLayout({ isHeader, children }: T_CustomLayout) {
  return (
    <main className="min-w-screen min-h-screen flex flex-col justify-start items-start overflow-hidden bg-[#E2E2E2]">
      <section className="w-screen">
        <Header />
      </section>
      <section className="relative w-screen h-full">
        {isHeader && (
          <section className="fixed ml-4 top-20 left-0 min-w-72 w-72 h-[85%] lg:block hidden">
            <Hamburger />
          </section>
        )}
        <section
          className={`min-h-screen flex justify-start items-start ${
            isHeader && "lg:ml-80"
          }`}
        >
          {children}
        </section>
      </section>
    </main>
  );
}

export { CustomLayout };
