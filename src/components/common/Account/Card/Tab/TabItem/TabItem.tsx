import Image from "next/image";

import { profileTab } from "@/data";

const TabItem = () => {
  return (
    <div className="self-stretch mt-12 max-md:max-w-full max-md:mr-1.5 max-md:mt-10 max-w-[98.4%] pr-[4.2rem]">
      <div className="gap-x-[3.7rem] grid grid-cols-3 gap-y-7">
        {profileTab.map(({ id, image }) => (
          <div
            className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0"
            key={id}
          >
            <Image
              src={image}
              className="aspect-square object-contain object-center w-[211px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
              alt={"image-alt-props"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabItem;
