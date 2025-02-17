import { CustomLayout } from "@/shared";
import { type ReactNode } from "react";

export default function AlumniLink_Content_Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CustomLayout isHamburger={true} isHeader={true}>
      {children}
    </CustomLayout>
  );
}
