import Image from "next/image";

import { IListCard } from "@/interfaces";
import { Button } from "@/components/global/Button";
import { Profile35 } from "@/constant/imgs";
import UploadScreenItem from "./ListCardItem/ListCardItem";
import UploadNewMovie from "./UploadNewMovie/UploadNewMovie";
import UploadNewSong from "./UploadNewSong/UploadNewSong";
import PublishAHappeningNews from "./PublishAHappeningNews/PublishAHappeningNews";
import UploadNewSeries from "./UploadNewSeries/UploadNewSeries";
import UploadNewAlbum from "./UploadNewAlbum/UploadNewAlbum";

const ListCard: React.FC<IListCard | any> = ({
  data,
  title = "Uploaded Movies",
  btnTitle1 = "Upload New Movie",
  loginAs = false,
  className,
  firstBtnLink = "/",
  secondBtnLink = "/",
  thirdBtnLink = "/",
  btnTitle = "Upload New Series",
  secondBtn = true,
  btnClassName,
  subElementClassName,
  titleClassName,
  AdminNamesAndRoles = false,
  management = false,
  formInputScreen = false,
  cardItemsScreen = false,
  uploadNewMovie = false,
  uploadNewSong = false,
  publishAHappeningNews = false,
  uploadNewSeries = false,
  uploadNewAlbum = false,
}) => {
  return (
    <div className={`w-full mt-[4.7rem] ${className}`}>
      {loginAs && (
        <div className="flex items-end text-left  justify-end gap-[15px] py-[3px]">
          <div className={"-mr-6"}>
            <p className="text-[12px] tracking-wider">Logged in:</p>
            <Button
              variant={"primary"}
              className="text-dark !pl-[14px] !pr-[11px] my-[5px] !py-[7px] !bg-dark-bold tracking-[0.4px] font-black text-sm rounded-s-full cursor-auto"
            >
              {"Admin123455..."}
            </Button>
          </div>
          <Image
            src={Profile35}
            alt="title"
            className="w-[58px] h-[58px] -mb-[8px]"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div className={`pl-8 py-2 ${subElementClassName}`}>
        <div className="">
          <h1
            className={`text-[26px] tracking-wider font-black ${
              formInputScreen ? "hidden" : ""
            } ${titleClassName}`}
          >
            {title}
          </h1>
          {AdminNamesAndRoles && (
            <div className="flex gap-[6.8rem] font-black mt-10 mb-11 capitalize">
              <p>Admin Names</p>
              <p>Roles</p>
            </div>
          )}
        </div>
        {cardItemsScreen && (
          <UploadScreenItem
            data={data}
            btnTitle={btnTitle}
            secondBtn={secondBtn}
            btnClassName={btnClassName}
            management={management}
            btnTitle1={btnTitle1}
            firstBtnLink={firstBtnLink}
            secondBtnLink={secondBtnLink}
            thirdBtnLink={thirdBtnLink}
          />
        )}
        {uploadNewMovie && <UploadNewMovie />}
        {uploadNewSong && <UploadNewSong />}
        {publishAHappeningNews && <PublishAHappeningNews />}
        {uploadNewSeries && <UploadNewSeries />}
        {uploadNewAlbum && <UploadNewAlbum />}
      </div>
    </div>
  );
};

export default ListCard;
