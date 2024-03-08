import { InputGroupTypes } from "@/types";

const InputGroup = ({
  label,
  type,
  register,
  registerName,
  handleKeyUp,
  error,
}: InputGroupTypes) => {
  return (
    <div className="min-w-96 flex justify-between items-start gap-10">
      <label htmlFor="">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={label}
          className="w-[300px] border border-slate-700 bg-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
          onKeyUp={handleKeyUp}
          {...register(registerName)}
        />
        <p className="text-xs text-red-600 absolute bottom-[-20px]">{error}</p>
      </div>
    </div>
  );
};

export default InputGroup;
