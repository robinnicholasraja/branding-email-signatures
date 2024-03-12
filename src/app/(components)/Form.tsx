"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Data, InputsTypes, RegisterNameTypes } from "@/store/types";
import InputGroup from "./InputGroup";
import { useSignatureStore } from "@/store/store";
import { schema } from "@/store/schema";

const SignatureForm = ({
  content,
  inputFields,
  defaultData,
}: {
  content: string;
  inputFields: InputsTypes[];
  defaultData: Data;
}) => {
  const { setData } = useSignatureStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<Data>({
    resolver: yupResolver(schema),
    defaultValues: defaultData,
    mode: "all",
  });
  const watchData = watch();

  const handleKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    registerName: RegisterNameTypes
  ) => {
    // Update the field value on keyup
    const updatedValue = event.currentTarget.value;
    setValue(registerName, updatedValue);
    setData(watchData);
  };

  const handleDownload = () => {
    const htmlContent = content;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "signature.html";
    a.click();

    URL.revokeObjectURL(url);
    reset();
  };

  const onSubmitHandler: SubmitHandler<Data> = (data: Data) => {
    setData(data);
    handleDownload();
    reset();
  };
  return (
    <div className="flex flex-col">
      <form
        id="signature-form"
        className="space-y-8"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        {inputFields.map(({ label, type, registerName }) => {
          return (
            <InputGroup
              key={registerName}
              label={label}
              type={type}
              register={register}
              registerName={registerName}
              error={errors?.[registerName]?.message}
              handleKeyUp={(e) => handleKeyUp(e, registerName)}
            />
          );
        })}
      </form>
    </div>
  );
};

export default SignatureForm;
