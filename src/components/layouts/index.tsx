import { FC } from "react";

import { ILayout } from "@/interfaces/ILayout";
import Navbar from "./Navbar/Navbar";

const MainLayout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex w-full px-[5.7rem] max-w-[1430px] h-full mx-auto bg-dark text-white">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
