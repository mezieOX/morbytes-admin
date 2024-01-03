import { uploadOption } from "@/data";
import { Input } from "../..";
import { Button } from "../../Button";
import { TextArea } from "../../TextArea";
import { UploadsIcon } from "@/assets/icons";

const UploadNewMovie = () => {
  return (
    <div className="flex flex-col -mt-[6px] min-w-[56.2rem] pl-7">
      <div>
        <h1 className="text-[24.5px] font-black tracking-wider">
          Upload a New Movie
        </h1>
      </div>
      <div className="flex flex-col gap-[31px] max-w-[684px]  my-[35px]">
        <Input
          label="Movie Title"
          placeholder={"Enter the title of the movie"}
        />
        <TextArea
          label="Movie Description"
          containerClass="-mt-2"
          labelClassName="tracking-wide"
        />
      </div>

      <div className="flex flex-col gap-[31px] w-max mt-3 max-w-[30rem]">
        {uploadOption.map(({ id, title }) => (
          <div
            className="border-0 outline-0 flex-1 rounded-md px-[28px] py-[14px] bg-dark-bold/10 font-normal tracking-wide items-center justify-between flex leading-6 text-sm text-dark-bold/60 placeholder:text-dark-bold/60 shadow-[0px_7px_10px_2px_#00000040]"
            key={id}
          >
            <p className="text-white !text-[22px] !tracking-wide  flex-1 pr-4">
              {title}
            </p>
            <Button
              variant={"secondary"}
              className="!text-white"
              title={"Select from your Computer"}
              btnSecondaryClassName={`!py-0`}
            />
          </div>
        ))}

        <Button
          variant={"secondary"}
          icon={<UploadsIcon className="!w-8 !h-8" />}
          title="Upload"
          btnSecondarySpanClassName={"!text-2xl font-black "}
          btnSecondaryClassName="text-white !bg-red !px-10 w-min !py-8 my-10 !py-5  rounded"
        ></Button>
      </div>
    </div>
  );
};

export default UploadNewMovie;
