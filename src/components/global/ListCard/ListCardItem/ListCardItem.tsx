"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { AddIcon, DeleteIcon, EditIcon } from "@/assets/icons";
import { Button } from "@/components/global/Button";

const ListCardItem: React.FC<any> = ({
  data = [],
  btnTitle,
  btnTitle1,
  secondBtn,
  btnClassName,
  management,
  firstBtnLink,
  secondBtnLink,
  thirdBtnLink,
}) => {
  const current = usePathname();

  let btnTitle2;

  if (current === "upload/view-all-music") {
    btnTitle2 = "Upload New Album";
  } else if (current === "upload/view-all-movies") {
    btnTitle2 = "Upload New Series";
  } else if (current === "upload/published-news") {
    btnTitle2 = "Publish New";
  } else {
  }
  return (
    <div
      className={`${!management ? "my-[19px]" : ""} ${
        management ? "-mt-8" : ""
      }`}
    >
      {data.map(({ id, image, title, description }: any) => (
        <div key={id}>
          {!management && (
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
          )}
        </div>
      ))}
      {!management && (
        <div
          className={`flex justify-end gap-[17px] w-full my-10 ${btnClassName}`}
        >
          <Link href={firstBtnLink}>
            <Button
              variant={"secondary"}
              className="!text-white"
              title={"View All in page"}
              btnSecondaryClassName={`!bg-dark-bold/30 !text-white lg:pr-1`}
            />
          </Link>

          {secondBtn && (
            <Link href={secondBtnLink}>
              <Button
                variant={"secondary"}
                icon={<AddIcon className="w-5" />}
                title={btnTitle1}
                btnSecondaryClassName={
                  current === "/published-news" ? "hidden" : undefined
                }
              />
            </Link>
          )}
          <Link href={thirdBtnLink}>
            <Button
              variant={"secondary"}
              icon={<AddIcon className="w-5" />}
              title={current === "/upload" ? btnTitle : btnTitle2}
            />
          </Link>
        </div>
      )}
      {management && (
        <Button
          variant={"secondary"}
          icon={<AddIcon className="w-5" />}
          title={"Add New Admin"}
          btnSecondaryClassName={"my-9"}
        />
      )}
    </div>
  );
};

export default ListCardItem;
