"use client";
import { profileTab, publishedNews, uploadedMusic } from "@/data";
import { Tab } from "@headlessui/react";
import ListCard from "@/components/global/ListCard/ListCard";

const lists = [
  {
    id: 1,
    name: "Movies",
  },
  {
    id: 2,
    name: "Music",
  },
  {
    id: 3,
    name: "News",
  },
];

const UploadComponent = () => {
  return (
    <Tab.Group>
      <div className="-mt-20">
        <Tab.List className="w-full lg:mt-[8.1rem]   bg-dark  lg:place-content-center h-[75px]  lg:h-[115px] px-4 lg:px-5 flex lg:justify-center justify-start items-center lg:gap-10">
          {lists.map((item) => (
            <Tab
              key={item.id}
              as="div"
              className="!outline-none !border-0 px-4 lg:px-1.5"
            >
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={`lg:!text-[21.99px] !text-xs font-medium leading-normal inline-block transition-all ease-out duration-150 h-9  lg:!pb-6 !pb-[1px] lg:!pt-[25.5px] !pt-[1px] lg:!px-[21.9px] px-[10px]  lg:py-[4px] !py-[2px] hover:shw hover:bg-dark-muted hover:text-white hover:text-sm
                    ${
                      selected
                        ? "bg-primary text-dark shw flex items-center justify-center"
                        : "text-primary flex items-center justify-center"
                    }
                  `}
                >
                  {item.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ListCard
              data={profileTab}
              firstBtnLink="view-all-movie"
              className={"!-mt-1.5"}
              secondBtnLink="upload-new-movie"
              thirdBtnLink="upload-new-series"
              cardItemsScreen={true}
              loginAs={true}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ListCard
              data={uploadedMusic}
              title={"Uploaded Music"}
              className={"!-mt-1.5"}
              cardItemsScreen={true}
              btnTitle={"Upload New Album"}
              btnTitle1={"Upload New Music"}
              firstBtnLink="view-all-music"
              secondBtnLink="upload-new-music"
              thirdBtnLink="upload-new-album"
              loginAs={true}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ListCard
              data={publishedNews}
              title={"Published  News"}
              className={"!-mt-1.5"}
              btnTitle={"Upload New"}
              secondBtn={false}
              cardItemsScreen={true}
              btnClassName={"!gap-10"}
              firstBtnLink="view-all-published-news"
              thirdBtnLink="published-news"
              loginAs={true}
            />{" "}
          </Tab.Panel>
          {/* ... */}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default UploadComponent;
