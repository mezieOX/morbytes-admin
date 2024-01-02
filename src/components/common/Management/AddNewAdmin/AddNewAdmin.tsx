import { Input } from "@/components/global";
import { Button } from "@/components/global/Button";
import { Profile35 } from "@/constant/imgs";
import Image from "next/image";

const AddNewAdmin = () => {
  return (
    <div className={`w-full mt-[4.7rem]`}>
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
      <div className={`pl-10 py-2`}>
        <div className="">
          <h1 className={`text-[26px] tracking-wider font-black`}>
            Registered Admin
          </h1>
        </div>
        <div className="flex flex-col my-5 min-w-[56.2rem]">
          <div className="flex flex-col gap-[31px] max-w-[684px] mx-4 my-11">
            <Input label="Enter Admin Username" />
            <Input label="Enter Admin Username" />

            <Input label="Confirm Admin Password" />
          </div>

          <div className="flex flex-col gap-[31px] max-w-[684px] -mt-[13px]  mx-4">
            <h3 className="text-white mb-1 !text-[22px] !tracking-wide">
              Choose Admin Role
            </h3>
            <div className="flex items-center gap-11 -mt-[26.5px]">
              <div className="flex items-center gap-3">
                <label
                  htmlFor="custom"
                  className="order-1 text-white mb-1 !text-[22px] !tracking-wide"
                >
                  Admin
                </label>
                <Input
                  type="radio"
                  className="text-primary bg-primary !-mt-2"
                />
              </div>
              <div className="flex items-center gap-3 ">
                <label
                  htmlFor="custom"
                  className="order-1 text-white mb-1 !text-[22px] !tracking-wide"
                >
                  Sub-Admin
                </label>
                <Input
                  type="radio"
                  className="text-primary bg-primary !-mt-2"
                />
              </div>
              <div className="flex items-center gap-3 my-1">
                <label
                  htmlFor="Male"
                  className="order-1 text-white mb-1  !text-[22px] !tracking-wide]"
                >
                  Publisher
                </label>
                <Input
                  type="radio"
                  className="text-primary bg-primary !-mt-2"
                />
              </div>
            </div>
            <Button
              variant={"primary"}
              className="text-dark !px-16 !text-sm w-max my-[3px] !py-2  font-black rounded"
            >
              {"Confirm"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAdmin;
