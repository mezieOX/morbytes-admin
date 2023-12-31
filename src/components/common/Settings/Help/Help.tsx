import { TextArea } from "@/components/global/TextArea";

const Help = () => {
  return (
    <div className="bg-gray min-w-[41.6rem]  max-w-[41.6rem]  overflow-y-scroll py-6 rounded-[13px] p-[5.1rem] min-h-screen scrollbar-hide">
      <TextArea
        label="Tell us what’s wrong"
        totalChar={false}
        labelClassName="!my-0"
        containerClass="flex-col !gap-5 mt-40"
        placeholder=""
        className="w-full min-h-[15rem]"
      />
    </div>
  );
};

export default Help;
