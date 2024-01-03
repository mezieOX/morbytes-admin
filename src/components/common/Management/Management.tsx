"use client";
import Link from "next/link";

import { IListCard } from "@/interfaces";
import { LoginAsCard } from "@/components/global";
import { AddIcon } from "@/assets/icons";
import { Button } from "@/components/global/Button";
import ManagementListCardItem from "./ManagementListCardItem/ManagementListCardItem";

const Management: React.FC<IListCard> = ({ data = [] }) => {
  return (
    <div className={`w-full mt-[4.7rem]`}>
      <LoginAsCard />

      <div className={`pl-10 py-[39px]`}>
        <div className="">
          <h1 className={`text-[24px] tracking-wide font-black`}>
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
