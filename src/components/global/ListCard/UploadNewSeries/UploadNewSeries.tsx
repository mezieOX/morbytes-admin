import { uploadOption } from "@/data";
import { Input } from "../..";
import { Button } from "../../Button";
import { TextArea } from "../../TextArea";
import { UploadsIcon } from "@/assets/icons";

const UploadNewSeries = () => {
  return (
    <div className="flex flex-col -mt-[6px] min-w-[56.2rem] pl-6">
      <div className="mb-[14px]">
        <h1 className="text-[25px] font-black tracking-[0.060rem]">
          Upload a New Series
        </h1>
      </div>
      <div className="flex flex-col gap-[31px] max-w-[684px]  my-[33px]">
        <Input
          label="Series Title"
          labelClassName="!tracking-[0.010rem]"
          placeholder={"Enter the title of the movie"}
        />
        <TextArea
          label="Series Description"
          labelClassName="!tracking-[0.045rem]"
          containerClass="-mt-2"
        />
      </div>

      <div className="flex flex-col gap-[25px] w-max mt-3 min-w-[30.1rem]">
        {uploadOption.map(({ id, title }) => (
          <div
            className="border-0 outline-0 flex-1 rounded-[8px] px-[30px] py-[14px] bg-dark-bold/20 font-normal tracking-wide items-center justify-between flex leading-6 text-sm text-dark-bold/60 placeholder:text-dark-bold/60 shadow-[0px_7px_10px_2px_#00000040] max-w-fit"
            key={id}
          >
            <p className="text-white text-[22px] tracking-[0.06rem]  flex-1 pr-4 min-w-fit">
              {title}
            </p>
            <Button
              variant={"secondary"}
              className="!text-white"
              title={"Select from your Computer"}
              btnSecondaryClassName={`!py-0 !max-h-[32px] !my-[2.5px]`}
            />
          </div>
        ))}

        <Button
          variant={"secondary"}
          icon={<UploadsIcon className="!w-8 !h-8" />}
          title="Upload"
          btnSecondarySpanClassName={"!text-[22.5px] !tracking-wide font-black"}
          btnSecondaryClassName="text-white !bg-red !px-[1.5rem] w-min !py-7 my-[2.7rem] !py-5  rounded"
        ></Button>
      </div>
    </div>
  );
};

export default UploadNewSeries;
