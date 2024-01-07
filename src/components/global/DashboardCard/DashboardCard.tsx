import Image from "next/image";

import { IDashboardCard } from "@/interfaces";
import { MovieImg } from "@/constant/imgs";

const DashboardCard: React.FC<IDashboardCard> = ({
  label = "Movies",
  movies = true,
  title = "uploads",
  action = " Downloads",
}) => {
  return (
    <div className=" -mt-7 tracking-wider w-fit max-w-[17.6rem] min-h-[17.2rem] max-h-[17.2rem]">
      <p className="text-xl mb-[10px]">{label}</p>
      <div className="bg-gray-muted/40 rounded-md shadow-[0px_11px_18px_0px_#0000004D] relative">
        <div className="right-0 top-[38px] absolute">
          <Image
            src={MovieImg}
            alt="title"
            className="w-[9.5rem]"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`flex gap-[4.5rem] items-center px-[3.3rem] pt-[2.3rem]`}
        >
          <p
            className={`text-[8px] pb-[3px] pt-[4px] px-[9px] rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center ${
              !movies
                ? "mx-auto !text-[10px] pb-[5px] pt-[5px] px-[16px] -mt-2 mb-1  rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center"
                : ""
            }`}
          >
            {title}
          </p>
          <p
            className={`text-[8px] pb-[3px] pt-[4px] px-[9px] rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center ${
              !movies ? "hidden" : "inline-block"
            }`}
          >
            Streams
          </p>
        </div>
        <div className={`flex gap-8 py-1 px-7 ${!movies ? "px-[6rem]" : ""}`}>
          <div className="text-[31px] font-black">10,345</div>
          <div
            className={`text-[31px] font-black  ${
              !movies ? "hidden" : "inline-block"
            }`}
          >
            1,024
          </div>
        </div>

        <div className="flex justify-center flex-col gap-10 items-center mt-4">
          <p className="text-[9px] pb-[5px] pt-[5px] px-[11px] rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center">
            {action}
          </p>
          <div className="text-[40px] font-black -mt-10 mb-[1.9rem]">
            38,005
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
