"use client";
import Image from "next/image";
import Link from "next/link";

import { Search } from "@/components/global";
import { AddIcon, DeleteIcon, EditIcon } from "@/assets/icons";
import { Button } from "@/components/global/Button";
import { IListCard } from "@/interfaces";
import { Profile35 } from "@/constant/imgs";

const ViewAllMovie: React.FC<IListCard> = ({ data = [] }) => {
  return (
    <div className={`w-full mt-[4.7rem] max-w-[58.8rem]`}>
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
      <div className={"my-[26px] mx-[30px]"}>
        <Search
          className="!flex-1 !text-dark !-mt-3 !text-[10px] placeholder:!text-dark"
          placeholder={"Search an uploaded movie..."}
          buttonClassName="!mx-0"
          containerClassName="-mt-[26px] mb-[2.2rem] mx-[30px]"
        />

        {data.map(({ id, image, title, description }: IListCard) => (
          <div key={id}>
            <div className={"min-w-[56.2rem]"}></div>
            <div className="flex items-center text-left mt-1 justify-start gap-[15px] cursor-pointer py-[3px] border-b-[3px] border-dark-semi">
              <Image
                src={image ?? ""}
                alt="title"
                className="w-[57px] max-h-[54px] rounded m-2"
                style={{ objectFit: "cover" }}
              />
              <div>
                <h2 className="text-xl font-black tracking-wider">{title}</h2>
                <p className="text-xs max-w-[40rem] min-w-[40rem] -mt-[3px] tracking-wide text-dark-bolder/60 leading-[15px]">
                  {description}
                </p>
              </div>
              <div className="flex-grow flex gap-4  justify-end mx-6 -mb-5">
                <EditIcon className={"w-[16.5px] "} />
                <DeleteIcon className={"w-[15px]"} />
              </div>
            </div>
          </div>
        ))}
        <div
          className={`flex 
            search && !justify-start !my-5 !gap-8
           w-full`}
        >
          <Link href={"upload-new-movie"}>
            <Button
              variant={"secondary"}
              icon={<AddIcon className="w-5" />}
              title={"Upload New Movie"}
            />
          </Link>
          <Link href={"upload-new-series"}>
            <Button
              variant={"secondary"}
              icon={<AddIcon className="w-5" />}
              title={"Upload New Series"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewAllMovie;
