import { InputGroupTypes } from "@/store/types";

const InputGroup = ({
  label,
  type,
  register,
  registerName,
  handleKeyUp,
  onFocus,
  error,
}: InputGroupTypes) => {
  return (
    <div className="min-w-96 flex justify-between items-start gap-10">
      <label htmlFor="">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={label}
          className={`w-[400px] border bg-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent ${error ? "border-red-500 focus:border-red-700" : "border-sky-500 focus:border-sky-700"}`}
          onKeyUp={handleKeyUp}
          onFocus={onFocus}
          {...register(registerName)}
        />
        <p className="text-xs text-red-600 absolute bottom-[-20px]">{error}</p>
      </div>
    </div>
  );
};

export default InputGroup;
