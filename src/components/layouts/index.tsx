import { FC } from "react";

import { ILayout } from "@/interfaces/ILayout";
import Navbar from "./Navbar/Navbar";

const MainLayout: FC<ILayout> = ({
  children,
  className,
  containerClass,
  wrapperClassName,
}) => {
  return (
    <div className={`w-full min-h-screen !mx-auto flex  ${wrapperClassName}`}>
      <div
        className={`flex  px-[5.7rem] ${containerClass}  mx-auto bg-dark text-white`}
      >
        <div className={`${className}`}>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
