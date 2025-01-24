import { CustomHamburgerLayout } from "@/shared/layout/ui/CustomHamburgerLayout";
import { type ReactNode } from "react";

export default function AlumniLink_Post_List_Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CustomHamburgerLayout isHamburger={true} isHeader={true}>
      {children}
    </CustomHamburgerLayout>
  );
}
