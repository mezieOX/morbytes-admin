"use client";

import { Tab } from "@headlessui/react";
import SettingsInfo from "./SettingsInfo/SettingsInfo";
import Help from "./Help/Help";

const lists = [
  {
    id: 1,
    name: "Profile",
  },
  {
    id: 2,
    name: "Help",
  },
  {
    id: 2,
    name: "Log Out",
  },
];

const SettingsScreen = () => {
  return (
    <div className="flex my-[4.4rem] mr-auto  w-full z-40 flex-grow mx-4 gap-[19px]  -ml-11 pr-1">
      <Tab.Group>
        <div className="bg-gray flex-grow rounded-[13px]">
          <Tab.List
            className={
              "flex flex-col w-full max-w-full items-center justify-center mt-[9rem] gap-6"
            }
          >
            {lists.map((item) => (
              <Tab
                key={item.id}
                as="div"
                className="!outline-none !border-0 px-4 lg:px-1.5 last:mt-[27rem]"
              >
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={`text-amber-500 text-[22px] leading-7 whitespace-nowrap justify-center items-stretch   bg-opacity-50 tracking-wider transition px-8 py-2.5 rounded-md max-md:px-5  hover:duration-500
                    ${
                      selected
                        ? "bg-dark-bolder/5"
                        : "text-white bg-transparent hover:bg-dark-bolder/10 hover:!text-dark-bolder/60"
                    }
                  `}
                  >
                    {item.name}
                  </button>
                )}
              </Tab>
            ))}
            {/* ...  */}
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            {" "}
            <SettingsInfo />
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <Help />
          </Tab.Panel>
          {/* ... */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default SettingsScreen;
