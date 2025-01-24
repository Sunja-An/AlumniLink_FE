import { Header } from "@/shared/components/header/Header";
import { type ReactNode } from "react";

type T_CustomLayout = {
  isHeader: boolean;
  children: ReactNode;
};

function CustomLayout({ isHeader, children }: T_CustomLayout) {
  return (
    <main className="min-w-screen min-h-screen flex justify-start items-start overflow-hidden bg-[#F0F0F0]">
      {isHeader && (
        <section className="fixed top-0 left-0 min-w-80 w-80 min-h-screen h-screen">
          <Header />
        </section>
      )}
      <section
        className={`py-20 w-full h-full flex justify-start items-start ${
          isHeader && "ml-80"
        }`}
      >
        {children}
      </section>
    </main>
  );
}

export { CustomLayout };
