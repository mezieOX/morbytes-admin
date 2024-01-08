import Link from "next/link";

import { Input } from "../..";
import { TextArea } from "../../TextArea";
import { uploadAlbumOption, uploadSeriesOption } from "@/data";
import { Button } from "../../Button";
import { AddIcon, UploadsIcon } from "@/assets/icons";

const UploadNewAlbum = () => {
  return (
    <div className="flex flex-col -mt-[6px] min-w-[56.2rem] pl-6">
      <div>
        <h1 className="text-[25px] font-black tracking-[0.060rem]">
          Upload a New Album
        </h1>
      </div>
      <div className="flex flex-col gap-[31px] max-w-[684px]  my-[33px]">
        <Input
          label="Album Title"
          labelClassName="!tracking-[0.050rem]"
          placeholder={"Enter the title of the Song"}
        />
        <Input
          label="Artiste Name"
          labelClassName="!tracking-[0.040rem] -mt-2"
        />
        <TextArea
          label="Album Description"
          labelClassName="!tracking-[0.050rem]"
          containerClass="-mt-[5px]"
          className={"min-h-[9.3rem]"}
        />
      </div>

      <div className="flex flex-col mt-7 min-w-[795px] max-w-[795px]">
        {uploadSeriesOption.map(({ id }) => (
          <div key={id} className="flex justify-start">
            <div className="border-0 outline-0  flex-1 rounded-[8px] py-2 pl-2 pr-3 h-min bg-dark-bold/20 font-normal tracking-wide items-center my-[7px] justify-between flex leading-6 text-sm text-dark-bold/60 placeholder:text-dark-bold/60 shadow-[0px_7px_10px_2px_#00000040] max-w-fit">
              <p className="text-white text-sm tracking-[0.05rem]  flex-1 px-2 py-1.5 min-w-fit">
                Track 1
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
              label="Featured Artiste(s)"
              labelClassName="!text-white !text-[14.9px] !tracking-[0.06rem] !pl-12 pr-6 py-1.5"
              containerClass="!flex-row !items-center !w-[31.4rem]"
              className={"py-[11.8px] !w-full !flex-grow"}
            />
          </div>
        ))}
        <Link href={""} className="ml-auto my-6 mr-8">
          <Button
            variant={"secondary"}
            icon={<AddIcon className="w-5" />}
            title={"Add Track"}
            className=""
          />
        </Link>

        <div className="flex flex-col gap-[13px] w-max -mt-4 mb-5 max-w-[30.1rem]">
          {uploadAlbumOption.map(({ id, title }) => (
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
                btnSecondaryClassName={`!py-0 !max-h-[32px] !ml-auto !px-[3.5px]`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-7 mt-1">
          <div className="flex flex-col gap-[31px] max-w-[684px]">
            <h3 className="text-white mb-1 !text-[22px] !tracking-wide">
              Select a Category
            </h3>
            <div className="flex items-center gap-11 -mt-[26.5px]">
              <div className="flex items-center gap-6">
                <label
                  htmlFor="custom"
                  className="order-1 text-white mb-1 !text-[22px] !tracking-wide"
                >
                  aja/Africa
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
                  Foreign
                </label>
                <Input
                  type="radio"
                  className="text-primary bg-primary !-mt-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[31px] max-w-[684px] -mt-[13px]">
            <h3 className="text-white mb-1 !text-[22px] !tracking-wide">
              Select a Category
            </h3>
            <div className="flex items-center gap-11 -mt-[26.5px]">
              <div className="flex items-center gap-3">
                <label
                  htmlFor="custom"
                  className="order-1 text-white mb-1 !text-[22px] !tracking-wide"
                >
                  Dj Mixtape
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
                  Gospel
                </label>
                <Input
                  type="radio"
                  className="text-primary bg-primary !-mt-2"
                />
              </div>
            </div>
          </div>
        </div>

        <Button
          variant={"secondary"}
          icon={<UploadsIcon className="!w-8 !h-8 fill-current" />}
          title="Upload"
          btnSecondarySpanClassName={"!text-[22.5px] !tracking-wide font-black"}
          btnSecondaryClassName="text-white !bg-red !px-[1.5rem] w-min !py-7 my-4 !py-5  rounded"
        ></Button>
      </div>
    </div>
  );
};

export default UploadNewAlbum;
