import { ITextArea } from "@/interfaces";

const TextArea: React.FC<ITextArea> = ({
  className,
  placeholder = "Enter the Description of the movie",
  label,
  labelClassName,
  containerClass,
}) => {
  return (
    <div className={`flex  flex-col  ${containerClass}`}>
      <label
        htmlFor="input"
        className={`text-white mb-1 !text-[22px] !tracking-wide" ${labelClassName}`}
      >
        {label}
      </label>
      <textarea
        className={`border-0 outline-0 flex-1 rounded-md px-[22px] py-[14px] bg-dark-bold/10 font-normal tracking-wide leading-6 text-sm text-dark-bold/60 min-h-[8rem]  italic placeholder:text-dark-bold/60 ${className}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
