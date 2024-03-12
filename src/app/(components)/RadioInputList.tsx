import { Data } from "@/store/types";
import React from "react";

const RadioInputList = ({
  data,
  setData,
  sourceTypes,
  label,
  name
}: {
  data: Data;
  setData: (data: Data) => void;
  sourceTypes: { label: string; value: string }[];
  label: string;
  name:string
}) => {
  return (
    <div className="flex flex-col space-y-3 mt-4">
      <label className="text-gray-900">{label}</label>
      <div className="flex flex-wrap gap-4">
        {sourceTypes.map(({ label, value }) => (
          <label className="flex gap-x-2 has-[:checked]:border has-[:checked]:border-blue-500 has-[:checked]:rounded-lg p-2">
            <input
              type="radio"
              className=""
              name={name}
              value={value}
              checked={data.source === value}
              onChange={() => setData({ ...data, source: value })}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInputList;
