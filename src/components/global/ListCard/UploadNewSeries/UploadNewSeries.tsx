import { Input } from "../..";
import { Button } from "../../Button";
import { TextArea } from "../../TextArea";

const UploadNewSeries = () => {
  return (
    <div className="flex flex-col my-5 min-w-[56.2rem]">
      <div className="flex flex-col gap-[31px] max-w-[684px]  my-11">
        <Input
          label="Movie Title"
          placeholder={"Enter the title of the movie"}
        />
        <TextArea label="Movie Description" />
      </div>

      <div className="flex flex-col gap-[31px] max-w-[684px] -mt-[13px]  mx-4">
        <div className="border-0 outline-0 flex-1 rounded-md px-[22px] py-[14px] bg-dark-bold/10 font-normal tracking-wide items-center gap-20 flex leading-6 text-sm text-dark-bold/60  italic placeholder:text-dark-bold/60 ">
          <p className="text-white !text-[22px] !tracking-wide">
            Upload a movie
          </p>
          <Button
            variant={"secondary"}
            title={"Select from your Computer"}
            btnSecondaryClassName={`!bg-dark-bold/30 !text-white lg:pr-1 `}
          />
        </div>

        <Button
          variant={"primary"}
          className="text-white !bg-red !px-16 !text-2xl w-max my-[3px] !py-2  font-black rounded"
        >
          {"Upload"}
        </Button>
      </div>
    </div>
  );
};

export default UploadNewSeries;
