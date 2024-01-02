"use client";

import { Button } from "@/components/global/Button";
import { IListCard } from "@/interfaces";
import ManagementListCardItem from "./ManagementListCardItem/ManagementListCardItem";
import { AddIcon } from "@/assets/icons";
import { Profile35 } from "@/constant/imgs";
import Image from "next/image";
import Link from "next/link";

const Management: React.FC<IListCard> = ({ data = [] }) => {
  return (
    <div className={`w-full mt-[4.7rem]`}>
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
      <div className={`pl-10 py-6`}>
        <div className="">
          <h1 className={`text-[26px] tracking-wider font-black`}>
            Registered Admin
          </h1>
          <div className="flex gap-[6.8rem] font-black mt-10 mb-11 capitalize">
            <p>Admin Names</p>
            <p>Roles</p>
          </div>
        </div>
        <div className={`-mt-8`}>
          {data.map(({ id, title }: IListCard) => (
            <div key={id}>
              <div className={"min-w-[56.2rem]"}>
                <ManagementListCardItem title={title} key={id} />
              </div>
            </div>
          ))}
          <Link href="management/add-new-admin">
            <Button
              variant={"secondary"}
              icon={<AddIcon className="w-5" />}
              title={"Add New Admin"}
              btnSecondaryClassName={"my-9"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Management;
