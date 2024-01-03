import Image from "next/image";

import { Profile35 } from "@/constant/imgs";
import { Button } from "../Button";

const LoginAsCard = () => {
  return (
    <div className="flex items-end text-left  justify-end gap-[15px] py-[3px]">
      <div className={"-mr-6"}>
        <p className="text-[12px] tracking-wider">Logged in:</p>
        <Button
          variant={"primary"}
          className="text-dark !pl-[14px] !pr-[11px] my-[5px] !py-[7px] !bg-dark-bold tracking-[0.4px] font-black text-sm rounded-s-full cursor-auto"
        >
          {"Admin123455..."}
        </Button>
      </div>
      <Image
        src={Profile35}
        alt="title"
        className="w-[58px] h-[58px] -mb-[8px]"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default LoginAsCard;
