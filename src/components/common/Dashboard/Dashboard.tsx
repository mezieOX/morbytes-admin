"use client";
import { LoginAsCard } from "@/components/global";
import { Tab } from "@headlessui/react";
import { Button } from "@/components/global/Button";
import { DashboardCard } from "@/components/global/DashboardCard";

const lists = [
  {
    id: 1,
    name: "Weekly",
  },
  {
    id: 2,
    name: "Monthly",
  },
  {
    id: 3,
    name: "Annually",
  },
];

const DashboardComponent = () => {
  return (
    <div className="w-full mt-[4.5rem] ml-14">
      <div className="ml-auto w-full">
        <LoginAsCard />
      </div>
      <Tab.Group>
        <div className="-mt-[8.8rem]">
          <Tab.List className="w-full lg:mt-[8.1rem]   bg-dark   h-[75px]  lg:h-[115px] flex  justify-start items-center lg:gap-2">
            {lists.map((item) => (
              <Tab key={item.id} as="div" className="!outline-none !border-0">
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={`text-[10px] py-[5px] px-[12.8px] rounded font-normal leading-normal inline-block transition-all ease-out duration-150
                    ${
                      selected
                        ? "bg-primary text-dark shw flex items-center font-black px-[13.3px] justify-center"
                        : "text-white bg-gray-muted/40 flex items-center justify-center"
                    }
                  `}
                  >
                    {item.name}
                  </button>
                )}
              </Tab>
            ))}
            <Button
              variant={"secondary"}
              className="!text-dark shw flex !items-center !font-black !px-[13.3px] !justify-center !text-[10px] !py-[5px]"
              title={"Download Reports"}
              btnSecondarySpanClassName="!text-[10px] !py-[5px] !pr-0 !pl-0 !w-fit !ml-[3px] !mr-0"
              btnSecondaryClassName={`!ml-auto !w-fit !text-[10px] !text-dark !pr-3 shw flex !items-center !font-black !justify-center !w-fit`}
            />
          </Tab.List>
          <Tab.Panels>
            <div className={"grid grid-cols-3 gap-[2.2rem]"}>
              <DashboardCard />
              <DashboardCard label="Music" movies={false} />
              <DashboardCard
                label="News"
                movies={false}
                title={"Published"}
                action={"Read"}
              />
            </div>
            <div className="grid grid-cols-3 my-[3.4rem] -mr-10">
              <div className="col-span-2"></div>
              <DashboardCard label="Socials" movies={false} />
              <div></div>
            </div>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default DashboardComponent;
