import { DeleteIcon, EditIcon } from "@/assets/icons";
import { Button } from "@/components/global/Button";

const ManagementListCardItem = ({ title }: { title?: string }) => {
  return (
    <div className="flex items-center text-left w-full justify-start  cursor-pointer border-b-[3px] gap-[5.5rem] border-dark-semi">
      <p className="font-normal mb-[19px] mt-[20px] tracking-wide">
        Admin532547634
      </p>
      <Button
        variant={"secondary"}
        className="!text-white flex-grow"
        title={title}
        btnSecondarySpanClassName={"!text-base !tracking-wider"}
        btnSecondaryClassName="!bg-dark-bold/10 !text-white !font-normal !text-lg lg:!pr-[.6rem] lg:!pl-4"
      />
      {title !== "Admin" && (
        <div className="flex-grow flex gap-4  justify-end mx-6">
          <EditIcon className={"w-4 "} />
          <DeleteIcon className={"w-4"} />
        </div>
      )}
    </div>
  );
};

export default ManagementListCardItem;
