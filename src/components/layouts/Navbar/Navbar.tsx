"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { AppIcon, BarIcon, ManagementIcon, UploadsIcon } from "@/assets/icons";

const routes = [
  {
    name: "Dashboard",
    link: "/",
    Icon: BarIcon,
    id: 1,
  },
  {
    name: "Upload",
    link: "/upload",
    Icon: UploadsIcon,
    id: 2,
  },
  {
    name: "Management",
    link: "/management",
    Icon: ManagementIcon,
    id: 3,
  },
];

const Navbar = () => {
  const current = usePathname();
  console.log(current);

  return (
    <header className="relative min-w-[243.8px]">
      <div
        className={`absolute !h-[700px] ${
          current === "/published-news" ? "!h-[36rem]" : ""
        } ${current === "/view-all-news" ? "!h-[36rem]" : ""} 
        ${current === "/view-all-music" ? "!h-[36rem]" : ""} ${
          current === "/view-all-movies" ? "!h-[35.9rem]" : ""
        }  w-[3px] bg-dark-semi right-0 top-[153.4px]`}
      ></div>
      <nav className="mt-[68px]">
        <Link href="/" className="">
          <AppIcon className="fill-current w-[30px] h-[28px]  lg:w-[53px] lg:h-[40px] text-white" />
        </Link>
        <ul className="mt-[4.4rem] ">
          {routes.map((route) => (
            <li
              key={route.id}
              className={`border-0 outline-none text-xl leading-normal transition  hover:transition-all relative  font-normal -ml-4 flex flex-col`}
            >
              <Link
                href={route.link}
                className={`flex items-center pl-4 pr-9 my-[18px] hover:duration-500 rounded-[7.57px]   gap-[20px] py-[8px] tracking-[0.07rem] w-min mt-2.5 transition ${
                  current === route.link ? "font-black" : ""
                }`}
              >
                <route.Icon
                  className={`w-[28.5px] ${
                    route.Icon === UploadsIcon ? "!w-[24px]" : ""
                  }  ${route.Icon === ManagementIcon ? "!w-[30px]" : ""}`}
                />
                <div className="pr-2">{route.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
