import { ReactNode } from "react";

export interface IRootLayout {
  children: ReactNode;
  title: string;
  className?: string;
}
