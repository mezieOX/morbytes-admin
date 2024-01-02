import { uploadOption } from "@/data";
import { Input } from "../..";
import { Button } from "../../Button";
import { TextArea } from "../../TextArea";
import { UploadsIcon } from "@/assets/icons";

const UploadNewMovie = () => {
  return (
    <div className="flex flex-col my-5 min-w-[56.2rem]">
      <div className="flex flex-col gap-[31px] max-w-[684px]  my-11">
        <Input
          label="Movie Title"
          placeholder={"Enter the title of the movie"}
        />
        <TextArea label="Movie Description" />
      </div>

      <div className="flex flex-col gap-[31px] w-max -mt-[13px]  mx-4">
        {uploadOption.map(({ id, title }) => (
          <div
            className="border-0 outline-0 flex-1 rounded-md px-[22px] py-[14px] bg-dark-bold/10 font-normal tracking-wide items-center gap-20 flex leading-6 text-sm text-dark-bold/60  italic placeholder:text-dark-bold/60 "
            key={id}
          >
            <p className="text-white !text-[22px] !tracking-wide">{title}</p>
            <Button
              variant={"secondary"}
              className="!text-white"
              title={"Select from your Computer"}
              btnSecondaryClassName={`lg:pr-1`}
            />
          </div>
        ))}

        <Button
          variant={"secondary"}
          icon={<UploadsIcon className="!w-8 !h-8" />}
          title="Upload"
          btnSecondarySpanClassName={"!text-2xl font-black "}
          btnSecondaryClassName="text-white !bg-red !px-16 h!-40 w-max my-[10px] !py-5  rounded"
        ></Button>
      </div>
    </div>
  );
};

export default UploadNewMovie;
