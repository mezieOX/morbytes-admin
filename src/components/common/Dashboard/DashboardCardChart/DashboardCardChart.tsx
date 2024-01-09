import { BlueIcon } from "@/assets/icons";
import ApexChart from "./ApexChart/ApexChartComponent";

const item = [
  {
    id: 1,
    Icon: BlueIcon,
    text: "Social",
  },
  {
    id: 1,
    Icon: BlueIcon,
    text: "Social",
  },
  {
    id: 1,
    Icon: BlueIcon,
    text: "Social",
  },
  {
    id: 1,
    Icon: BlueIcon,
    text: "Social",
  },
];

const DashboardCardChart = () => {
  return (
    <div className="grid grid-cols-3 my-[3.4rem] items-center -mr-10">
      <div className="col-span-2 mr-[22px]">
        <div className=" -mt-6 tracking-wider  min-h-[17.2rem]">
          <p className="text-xl mb-[14px] tracking-wider">Charts</p>
          <div className="bg-gray-muted/40 rounded-md min-h-[15.1rem] shadow-[0px_11px_18px_0px_#0000004D] relative">
            <div className="flex justify-center flex-col items-end gap-[6px] w-full py-[24px] px-[29px] absolute text-[11px] text-right">
              <div className="flex items-center gap-[6px]">
                Socials
                <div>
                  <BlueIcon className="fill-current text-[#33A02C]" />
                </div>
              </div>
              <div className="flex items-center gap-[6px]">
                Movies
                <div>
                  <BlueIcon className="fill-current text-[#1F78B4]" />
                </div>
              </div>
              <div className="flex items-center gap-[6px]">
                Music
                <div>
                  <BlueIcon className="fill-current text-[#B2DF8A]" />
                </div>
              </div>
              <div className="flex items-center gap-[6px]">
                News
                <div>
                  <BlueIcon className="fill-current text-[#A6CEE3]" />
                </div>
              </div>
            </div>

            <ApexChart />
          </div>
        </div>
      </div>
      <div>
        <div className=" -mt-6 tracking-wider w-fit min-w-[17.6rem] min-h-[17.2rem]">
          <p className="text-xl mb-[10px] tracking-wider">Socials</p>
          <div className="bg-gray-muted/40 rounded-md min-h-[15.1rem] shadow-[0px_11px_18px_0px_#0000004D] relative">
            <div
              className={`flex justify-center flex-col gap-10 items-center mt-[13px] pt-[26px]`}
            >
              <p
                className={`text-[8.5px] pb-[5px] pt-[5px] px-[11px] rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center`}
              >
                Registered users
              </p>
              <div className="text-[33px] font-black -mt-[37px] mb-[2rem]">
                8,825,749
              </div>
            </div>

            <div
              className={`flex justify-center flex-col gap-10 items-center -mt-7`}
            >
              <p
                className={`text-[8.5px] pb-[5px] pt-[5px] px-[11px] rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center`}
              >
                Active Users
              </p>
              <div className="text-[33px] font-black -mt-[37px] mb-[2rem]">
                7,025,564
              </div>
            </div>
            <div
              className={`flex justify-center flex-col gap-10 items-center -mt-[27px]`}
            >
              <p
                className={`text-[8.5px] pb-[5px] pt-[5px] px-[11px] rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center`}
              >
                Verified Users
              </p>
              <div className="text-[33px] font-black -mt-[37px] mb-[2rem]">
                745,721
              </div>
            </div>
            <div
              className={`flex justify-center flex-col gap-10 items-center -mt-[27px]`}
            >
              <p
                className={`text-[8.5px] pb-[5px] pt-[5px] px-[11px] rounded-full font-normal leading-normal inline-block transition-all ease-out duration-150 text-white bg-dark-bold/30 items-center justify-center`}
              >
                Dormant Accounts
              </p>
              <div className="text-[33px] font-black -mt-[37px] mb-[1.6rem]">
                1,075,749
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCardChart;
