import { IInput } from "@/interfaces";

const Input2: React.FC<IInput> = ({
  className,
  placeholder = "Type Here..",
  label,
  labelClassName,
  type = "text",
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
      <input
        id="input"
        type={type}
        className={`border-0 outline-0 flex-1 rounded-md px-[22px] py-[14px] bg-dark-bold/10 font-normal tracking-wide leading-6 text-sm text-dark-bold/60  italic placeholder:text-dark-bold/60 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input2;
