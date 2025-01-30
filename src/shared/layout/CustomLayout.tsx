import { Header } from "@/shared/components/header/Header";
import { type ReactNode } from "react";

type T_CustomLayout = {
  isHeader: boolean;
  children: ReactNode;
};

function CustomLayout({ isHeader, children }: T_CustomLayout) {
  return (
    <main className="min-w-screen min-h-screen flex justify-start items-start overflow-hidden bg-[#E2E2E2]">
      {isHeader && (
        <section className="fixed ml-10 my-10 top-0 left-0 min-w-80 w-80 h-[90%] lg:block hidden">
          <Header />
        </section>
      )}
      <section
        className={`w-full min-h-screen flex justify-start items-start ${
          isHeader && "lg:ml-80"
        }`}
      >
        {children}
      </section>
    </main>
  );
}

export { CustomLayout };
