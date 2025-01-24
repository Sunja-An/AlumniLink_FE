import { type ReactNode } from "react";

import { CustomLayout } from "@/shared/layout";

export default function AlumiLink_Main_Layout({
  children,
}: {
  children: ReactNode;
}) {
  return <CustomLayout isHeader={true}>{children}</CustomLayout>;
}
