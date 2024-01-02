import { ReactNode } from "react";

type AnyFunctionType = () => void;

export interface IButton {
  variant: "primary" | "secondary" | "outline";
  children?: ReactNode;
  text?: string;
  onClick?: AnyFunctionType;
  className?: string;
  link?: string;
  linkText?: string;
  icon?: React.ReactNode;
  title?: string;
  btnSecondaryClassName?: string;
  btnSecondarySpanClassName?: string;
}
