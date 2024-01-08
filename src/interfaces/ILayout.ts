import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
  className?: string;
  containerClass?: string;
  wrapperClassName?: string;
}
