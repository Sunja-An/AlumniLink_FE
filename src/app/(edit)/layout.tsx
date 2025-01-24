import { CustomHamburgerLayout } from "@/shared/layout/ui/CustomHamburgerLayout";
import { type ReactNode } from "react";

export default function AlumniLink_Edit_Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CustomHamburgerLayout isHamburger={false} isHeader={true}>
      {children}
    </CustomHamburgerLayout>
  );
}
