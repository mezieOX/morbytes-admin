"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { LoginImg } from "@/constant/imgs";
import { AppIcon } from "@/assets/icons";
import { Input } from "@/components/global";
import { Button } from "@/components/global/Button";

const Login = () => {
  const router = useRouter();
  return (
    <div className="pt-[7.4rem] bg-gray-light">
      <div className="flex items-center z-[2] justify-center top-[24.4rem] left-[11.5rem] 2xl:left-[29.6rem]  absolute">
        <Image
          src={LoginImg}
          alt="title"
          className="w-[62.4rem] -mt-[8.4rem]"
          objectFit="cover"
        />
      </div>
      <div className="max-w-[35.1rem]  z-[3] relative mx-auto border-primary  bg-white/40 border- border shadow-[0px_17px_17px_0px_#00000040] px-10 pt-11 pb-[5.7rem] rounded-[20px]">
        <AppIcon className="fill-current  mx-px w-[54px] h-[41px] text-white mt-[2.1rem]" />
        <h1 className=" text-dark  mt-10  text-2xl font-black lg:!text-[56px]  mb-[5.1rem] lg:text-sm  tracking-tighter">
          {"Log In"}
        </h1>
        <Input
          placeholder=""
          className="!border !border-dark !text-dark placeholder:!text-dark !max-h-[52px] !min-h-[52px] w-full !rounded-[8px]"
          label="Username or Email"
          labelClassName="!text-[1.2rem] !text-dark"
          required={true}
        />
        <Input
          labelClassName="mt-7 !text-[1.2rem] !text-dark"
          placeholder=""
          className="!max-h-[52px] !border !text-dark !border-dark placeholder:!text-dark  !min-h-[52px]    w-full !rounded-[8px]"
          label="Password"
          required={true}
          type="password"
        />
        <div className="flex justify-between items-center  my-5">
          <div className="flex items-center gap-px lg:gap-1 lg:-ml-1">
            <Input type="checkbox" className="!h-[30px] !w-[30px]" />
            <p className="ml-[2px] lg:ml-0 text-sm text-black">
              {"Remember Me"}
            </p>
          </div>
          <Link href={""} className="italic text-black text-sm">
            {"Forgot Password?"}
          </Link>
        </div>
        <Button
          variant="primary"
          onClick={() => {
            router.push("/dashboard");
          }}
          className="!text-primary !bg-dark !mt-6 hover:!text-white !transition hover:!bg-primary !text-lg !w-[15.5rem] h-auto !py-[6px] !text-[10px] !rounded-[28px] !font-normal"
        >
          {"Log In"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
