import { ITextArea } from "@/interfaces";

const TextArea: React.FC<ITextArea> = ({
  className,
  placeholder = "Tell people a little more about yourself...",
  label,
  labelClassName,
  containerClass,
  totalChar = true,
}) => {
  return (
    <>
      <div
        className={`flex items-start gap-[5.8rem] my-[.8rem] ${containerClass}`}
      >
        <label
          htmlFor="input"
          className={`text-white text-xl my-1.5 ${labelClassName}`}
        >
          {label}
        </label>
        <textarea
          className={`border-0 outline-0 flex-1 rounded-md px-4 py-2 bg-dark/60 font-normal leading-6 text-[10px] text-dark-bolder/60 h-[7.6rem]  italic placeholder:text-dark-bolder/60 ${className}`}
          placeholder={placeholder}
        ></textarea>
      </div>
      {totalChar && (
        <p className="ml-auto -mt-1 text-[10px] text-dark-bolder/60 italic">
          {" "}
          0/200
        </p>
      )}
    </>
  );
};

export default TextArea;
