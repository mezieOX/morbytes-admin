import { Input, LoginAsCard } from "@/components/global";
import { Button } from "@/components/global/Button";

const AddNewAdmin = () => {
  return (
    <div className={`w-full mt-[4.7rem]`}>
      <LoginAsCard />
      <div className={`pl-10 py-2`}>
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
