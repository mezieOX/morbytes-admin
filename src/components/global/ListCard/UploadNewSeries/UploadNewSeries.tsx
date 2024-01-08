import Link from "next/link";

import { Input } from "../..";
import { TextArea } from "../../TextArea";
import { uploadSeriesOption, uploadSeriesSelect } from "@/data";
import { AddIcon, UploadsIcon } from "@/assets/icons";
import { Button } from "../../Button";

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
          labelClassName="!tracking-[0.030rem]"
          containerClass="-mt-2"
        />
      </div>
      <div className="flex items-center justify-start gap-[3.1px] mb-10 mt-[18px] relative">
        <h3 className={"text-white text-[22px] tracking-[0.05rem]  pr-4"}>
          Season
        </h3>
        <div>
          <p
            className={
              "text-[9px] absolute right-[21.2rem] top-[3.4rem] italic tracking-wider text-dark-bold/60"
            }
          >
            This Section is Optional
          </p>
        </div>
        <div>
          <select
            name=""
            id=""
            className="border-0 outline-0  rounded-[4px] pl-[17px] pr-[19px] py-[8px] bg-dark-bold/20 font-normal tracking-wide items-center justify-between flex leading-6   placeholder:text-dark-bold/60 shadow-[0px_7px_10px_2px_#00000040] max-w-fit text-white text-[22px]   flex-1  min-w-fit"
          >
            <option value="">One</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col -mt-4 min-w-[795px] max-w-[795px]">
        {uploadSeriesOption.map(({ id }) => (
          <div key={id} className="flex justify-start">
            <div className="border-0 outline-0  flex-1 rounded-[8px] py-2 pl-2 pr-3 h-min bg-dark-bold/20 font-normal tracking-wide items-center my-[7px] justify-between flex leading-6 text-sm text-dark-bold/60 placeholder:text-dark-bold/60 shadow-[0px_7px_10px_2px_#00000040] max-w-fit">
              <p className="text-white text-sm tracking-[0.05rem]  flex-1 px-2 py-1.5 min-w-fit">
                Episode 1
              </p>
              <Button
                variant={"secondary"}
                className="!text-white "
                title={"Select from your Computer"}
                btnSecondaryClassName={`!py-0 !text-[6px] !px-0`}
                btnSecondarySpanClassName={"!text-[11.7px] !py-[3px]"}
              />
            </div>
            <Input
              label="Episode Title"
              labelClassName="!text-white !text-[14.9px] !tracking-[0.06rem] px-6 py-1.5"
              placeholder={"Enter the title of this Episode"}
              containerClass="!flex-row !items-center !w-[31.4rem]"
              className={
                "py-[11.8px] !w-full !flex-grow placeholder:!text-[9.5px] !text-[9.5px]"
              }
            />
          </div>
        ))}
        <Link href={""} className="ml-auto my-6 mx-4">
          <Button
            variant={"secondary"}
            icon={<AddIcon className="w-5" />}
            title={"Add Episode"}
            className=""
          />
        </Link>

        <div className="flex flex-col gap-[13px] w-max max-w-[30.1rem]">
          {uploadSeriesSelect.map(({ id, title }) => (
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
                btnSecondaryClassName={`!py-0 !max-h-[32px] !my-[2.5px] !ml-auto`}
              />
            </div>
          ))}
        </div>

        <Button
          variant={"secondary"}
          icon={<UploadsIcon className="!w-8 !h-8 fill-current" />}
          title="Upload"
          btnSecondarySpanClassName={"!text-[22.5px] !tracking-wide font-black"}
          btnSecondaryClassName="text-white !bg-red !px-[1.5rem] w-min !py-7 my-[3.1rem] !py-5  rounded"
        ></Button>
      </div>
    </div>
  );
};

export default UploadNewSeries;
