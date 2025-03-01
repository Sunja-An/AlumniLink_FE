import { Header } from "@/shared";
import { type ReactNode } from "react";

type T_CustomLayout = {
  isHeader: boolean;
  children: ReactNode;
};

function CustomLayout({ isHeader, children }: T_CustomLayout) {
  return (
    <main className="relative min-w-screen min-h-screen flex flex-col justify-start items-start overflow-hidden bg-[#FFFEFA]">
      <Header />
      <article className={`relative w-screen h-full ${isHeader && "mt-16"}`}>
        <section className="px-32 py-20 min-h-screen flex justify-start items-start xl:px-24 lg:px-10 md:px-4">
          {children}
        </section>
      </article>
    </main>
  );
}

export { CustomLayout };
