import { FC } from "react";

import { IButton } from "@/interfaces";

const Button: FC<IButton> = ({
  className,
  children,
  variant,
  icon,
  title,
  onClick,
  btnSecondaryClassName,
  btnSecondarySpanClassName,
}) => {
  return (
    <>
      {variant === "primary" && (
        <button
          onClick={onClick}
          className={`bg-primary text-dark text-[9.5px] rounded cursor-pointer px-[12px] py-[1px] font-black ${className}`}
        >
          {children}
        </button>
      )}
      {variant === "secondary" && (
        <button
          className={` ${btnSecondaryClassName} lg:rounded rounded-[1.44px]  bg-primary text-dark  pr-4 pl-2 flex-shrink-0  flex text-sm font-black  justify-center  items-center max-h-9`}
          onClick={onClick}
        >
          <span
            className={`text-[14px] mr-[.4rem] lg:pr-2 ml-2.5   leading-normal lg:py-2 pt-2.5 lg:pb-2 pb-1.5 ${btnSecondarySpanClassName} `}
          >
            {title}
          </span>
          {icon && icon}
        </button>
      )}
      {variant === "outline" && (
        <button
          className={` text-dark border border-dark ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
