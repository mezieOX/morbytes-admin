import { ISearch } from "@/interfaces";
import { SearchIcon } from "@/assets/icons";
import { Button } from "../Button";
import { Input } from "..";

const Search: React.FC<ISearch> = ({
  placeholder = "Search for any movie...",
  className,
  buttonClassName,
  containerClassName,
  iconClassName,
}) => {
  return (
    <div
      className={`w-[25rem] mx-[18px] bg-[#D9D9D9] flex justify-between   focus:border focus:border-primary focus:transition-all duration-150 ease-in-out mr-4  overflow-hidden h-[2.3rem]  rounded-[4px]  ${containerClassName} -mt-[34px] mb-[2.2rem]`}
    >
      <Input
        className={`placeholder:!text-[11px] text-[11px] bg-[#D9D9D9] rounded-[1.61px] pl-6 -mt-[2px]    placeholder:italic  flex-grow tracking-wide  w-full ${className}`}
        placeholder={placeholder}
      />
      <Button
        variant="primary"
        className={`grid  h-full rounded-[1.61px] px-3  font-bold place-content-center !py-1 mx-auto text-sm  ${buttonClassName}`}
      >
        <SearchIcon
          className={`!fill-current w-7 h-7 text-dark ${iconClassName}`}
        />
      </Button>
    </div>
  );
};

export default Search;
