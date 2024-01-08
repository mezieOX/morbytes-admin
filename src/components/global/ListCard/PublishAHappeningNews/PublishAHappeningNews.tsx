import { UploadsIcon } from "@/assets/icons";
import { Input } from "../..";
import { Button } from "../../Button";
import { TextArea } from "../../TextArea";
import { uploadAPublishedNewsOption } from "@/data";

const PublishAHappeningNews = () => {
  return (
    <div className="flex flex-col -mt-[6px] min-w-[56.2rem] pl-6">
      <div>
        <h1 className="text-[25px] font-black tracking-[0.060rem]">
          Publish a Happening News
        </h1>
      </div>
      <div className="flex flex-col gap-[31px] max-w-[684px]  my-[33px]">
        <Input
          label="News Headline"
          labelClassName="!tracking-[0.030rem]"
          placeholder={"Enter Headline of the News"}
        />
        <TextArea
          label="Body of the News"
          labelClassName="!tracking-[0.020rem]"
          placeholder={"Write the News Details here"}
          containerClass="-mt-px"
          className="!min-h-[13.7rem]"
        />
      </div>

      <div className="flex flex-col gap-[25px] w-max mt-[6px] max-w-[30.1rem]">
        {uploadAPublishedNewsOption.map(({ id, title }) => (
          <div
            className="border-0 outline-0 flex-1 rounded-[8px] px-[30px] py-[14px] bg-dark-bold/20 font-normal tracking-wide items-center justify-between flex leading-6 text-sm text-dark-bold/60 placeholder:text-dark-bold/60 shadow-[0px_7px_10px_2px_#00000040]"
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
        <div className="flex flex-col gap-[31px] max-w-[684px] mt-1.5">
          <h3 className="text-white !text-[22px] !tracking-wide mb-[2px]">
            Select a Category
          </h3>
          <div className="flex items-center gap-11 -mt-[26.5px]">
            <div className="flex items-center gap-3">
              <label
                htmlFor="custom"
                className="order-1 text-white mb-1 !text-[22px] !tracking-wide"
              >
                Happening
              </label>
              <Input type="radio" className="text-primary bg-primary !-mt-2" />
            </div>
            <div className="flex items-center gap-3 ">
              <label
                htmlFor="custom"
                className="order-1 text-white mb-1 !text-[22px] !tracking-wide"
              >
                Sport
              </label>
              <Input type="radio" className="text-primary bg-primary !-mt-2" />
            </div>
            <div className="flex items-center gap-3 my-1">
              <label
                htmlFor="Male"
                className="order-1 text-white mb-1  !text-[22px] !tracking-wide]"
              >
                Politics
              </label>
              <Input type="radio" className="text-primary bg-primary !-mt-2" />
            </div>
            <div className="flex items-center gap-3 my-1">
              <label
                htmlFor="Male"
                className="order-1 text-white mb-1  !text-[22px] !tracking-wide]"
              >
                Lifestyle
              </label>
              <Input type="radio" className="text-primary bg-primary !-mt-2" />
            </div>
          </div>
        </div>

        <Button
          variant={"secondary"}
          icon={<UploadsIcon className="!w-8 !h-8 fill-current" />}
          title="Publish"
          btnSecondarySpanClassName={"!text-[22.5px] !tracking-wide font-black"}
          btnSecondaryClassName="text-white !bg-red !px-[1.5rem] w-min !py-7 mb-[4.7rem] mt-5 !py-5  rounded"
        ></Button>
      </div>
    </div>
  );
};

export default PublishAHappeningNews;
