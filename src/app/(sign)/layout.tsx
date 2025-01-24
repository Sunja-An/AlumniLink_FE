import { CustomLayout } from "@/shared/layout";
import { type ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <CustomLayout isHeader={false}>{children}</CustomLayout>;
}
