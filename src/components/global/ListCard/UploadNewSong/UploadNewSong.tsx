import { songUploadOption } from "@/data";
import { UploadsIcon } from "@/assets/icons";
import { Input } from "../..";
import { Button } from "../../Button";
import { TextArea } from "../../TextArea";

const UploadNewSong = () => {
  return (
    <div className="flex flex-col -mt-[6px] min-w-[56.2rem] pl-6">
      <div>
        <h1 className="text-[25px] font-black tracking-[0.060rem]">
          Upload a New Song
        </h1>
      </div>
      <div className="flex flex-col gap-[31px] max-w-[684px]  my-[33px]">
        <Input
          label="Song Title"
          labelClassName="!tracking-[0.030rem]"
          placeholder={"Enter the title of the song"}
        />

        <div className={"grid grid-cols-2 gap-20 -mt-2"}>
          <Input
            label="Artiste Name"
            labelClassName="!tracking-[0.050rem]"
            placeholder={"Type here..."}
          />
          <Input
            label="Featured Artiste(s)"
            labelClassName="!tracking-[0.050rem]"
            placeholder={"Type here..."}
          />
        </div>
        <TextArea
          label="Song Description"
          labelClassName="!tracking-[0.045rem]"
          containerClass="-mt-1.5"
          className="min-h-[9.4rem]"
          placeholder={"Enter Description of the Song"}
        />
      </div>
      <div className="flex gap-4 w-max -mt-[15px]">
        <div className="flex flex-col gap-[25px] w-max mt-3 min-w-[30.1rem]">
          {songUploadOption.map(({ id, title }) => (
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
            btnSecondarySpanClassName={
              "!text-[22.5px] !tracking-wide font-black"
            }
            btnSecondaryClassName="text-white !bg-red !px-[1.5rem] w-min !py-7 my-[.9rem] !py-5  rounded"
          ></Button>
        </div>
        <div className="flex flex-col gap-7 mt-1">
          <div className="flex flex-col gap-[31px] max-w-[684px]  mx-4">
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
          <div className="flex flex-col gap-[31px] max-w-[684px] -mt-[13px]  mx-4">
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
      </div>
    </div>
  );
};

export default UploadNewSong;
