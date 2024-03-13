import { useSignatureStore } from "@/store/store";
import { Data, RegisterNameTypes } from "@/store/types";
import React from "react";
import { UseFormRegister } from "react-hook-form";

const RadioInputList = ({
  sourceTypes,
  label,
  register,
  registerName,
}: {
  sourceTypes: { label: string; value: string }[];
  label: string;
  register: UseFormRegister<Data>;
  registerName: RegisterNameTypes;
}) => {
  const { data, setData } = useSignatureStore((state) => state);

  return (
    <div className="flex flex-col space-y-3 mt-4">
      <label className="text-gray-900">{label}</label>
      <div className="flex flex-wrap gap-4">
        {sourceTypes.map(({ label, value }) => (
          <label
            key={label}
            className="flex gap-x-2 border border-slate-400 has-[:checked]:border-green-400 has-[:checked]:border-2 rounded-lg px-4 py-2 cursor-pointer relative"
          >
            <input type="radio" className="appearance-none before:rounded-full before:bg-slate-400 before:checked:bg-green-400 before:absolute before:w-2 before:h-2 before:top-1/2 before:left-2 before:-translate-y-1/2" value={value} {...register(registerName)} onChange={() => setData({ ...data, [registerName]: value })} />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInputList;
