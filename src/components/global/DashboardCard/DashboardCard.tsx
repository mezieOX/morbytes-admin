import Image from "next/image";

import { IDashboardCard } from "@/interfaces";
import { MovieImg, MusicImg, NewsImg } from "@/constant/imgs";

const DashboardCard: React.FC<IDashboardCard> = ({
  label = "Movies",
  movies = true,
  music = false,
  title = "uploads",
  action = " Downloads",
  social = false,
}) => {
  let img;
  if (movies) {
    img = MovieImg;
  } else if (music) {
    img = MusicImg;
  } else {
    img = NewsImg;
  }
  return (
    <div className=" -mt-7 tracking-wider w-fit max-w-[17.6rem] min-h-[17.2rem] max-h-[17.2rem]">
      <p className="text-xl mb-[10px]">{label}</p>
      <div className="bg-gray-muted/40 rounded-md min-h-[15.1rem] !h-[13.5rem] shadow-[0px_11px_18px_0px_#0000004D] relative">
        <div
          className={`right-0 top-[38px] absolute ${
            !music && !movies ? "top-[60px] right-9" : ""
          }`}
        >
          {!social && (
            <Image
              src={img}
              alt="title"
              className={`w-[9.5rem] ${music ? "!w-[10.9rem]" : ""}`}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div
          className={`flex gap-[4.5rem] items-center px-[3.3rem] pt-[2.4rem]`}
        >
          <p
            className={`text-[8px] pb-[3px] pt-[4px] px-[9px] rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center ${
              !movies
                ? "mx-auto !text-[10px] pb-[5px] pt-[5px] !px-[16px] -mt-2 mb-1  rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center"
                : ""
            } ${title === "Published" ? "!px-[11.8px] !text-[9px]" : ""}`}
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

        <div
          className={`flex justify-center flex-col gap-10 items-center mt-[13px] ${
            !movies ? "!mt-[19px]" : ""
          }`}
        >
          <p
            className={`text-[9px] pb-[5px] pt-[5px] px-[11px] rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center ${
              action === "Read" ? "!px-6" : ""
            }`}
          >
            {action}
          </p>
          <div className="text-[40px] font-black -mt-[39px] mb-[2rem]">
            38,005
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
