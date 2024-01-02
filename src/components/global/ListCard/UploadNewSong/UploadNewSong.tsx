import { UploadsIcon } from "@/assets/icons";
import { Input } from "../..";
import { Button } from "../../Button";
import { TextArea } from "../../TextArea";
import { uploadOption } from "@/data";

const UploadNewSong = () => {
  return (
    <div className="flex flex-col my-5 min-w-[56.2rem]">
      <div className="flex flex-col gap-[31px] max-w-[684px]  my-11">
        <Input
          label="Movie Title"
          placeholder={"Enter the title of the movie"}
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Movie Title"
            placeholder={"Enter the title of the movie"}
          />
          <Input
            label="Movie Title"
            placeholder={"Enter the title of the movie"}
          />
        </div>
        <TextArea label="Movie Description" />
      </div>

      <div className="flex flex-col gap-[31px] w-max -mt-[13px]  mx-4">
        <div className="flex items-start">
          <div>
            {uploadOption.map(({ id, title }) => (
              <div
                className="border-0 outline-0 flex-1 rounded-md px-[22px] py-[14px] bg-dark-bold/10 font-normal tracking-wide items-center gap-20 flex leading-6 text-sm text-dark-bold/60  italic placeholder:text-dark-bold/60 "
                key={id}
              >
                <p className="text-white !text-[22px] !tracking-wide">
                  {title}
                </p>
                <Button
                  variant={"secondary"}
                  className="!text-white"
                  title={"Select from your Computer"}
                  btnSecondaryClassName={`lg:pr-1`}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-[31px] max-w-[684px]  mx-4">
              <h3 className="text-white mb-1 !text-[22px] !tracking-wide">
                Select a Category
              </h3>
              <div className="flex items-center gap-11 -mt-[26.5px]">
                <div className="flex items-center gap-3">
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

        <Button
          variant={"secondary"}
          icon={<UploadsIcon className="!w-8 !h-8" />}
          title="Upload"
          btnSecondarySpanClassName={"!text-2xl font-black "}
          btnSecondaryClassName="text-white !bg-red !p-6 h!-40 w-max my-[10px] !py-8  rounded"
        ></Button>
      </div>
    </div>
  );
};

export default UploadNewSong;
