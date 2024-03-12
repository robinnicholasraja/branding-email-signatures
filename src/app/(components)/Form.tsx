"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Data, InputsTypes, RegisterNameTypes } from "@/store/types";
import InputGroup from "./InputGroup";
import { schema } from "@/store/schema";
import { usePathname } from "next/navigation";
import { initialData, useSignatureStore } from "@/store/store";

const SignatureForm = ({
  content,
  inputFields,
}: {
  content: string;
  inputFields: InputsTypes[];
}) => {
  const { data, setData } = useSignatureStore((state) => state);

  const pathname = usePathname()
  const index = pathname.split("/")[1]
  const defaultdata = initialData[index]

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<Data>({
    resolver: yupResolver(schema),
    defaultValues: defaultdata,
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
    const fileName = data.name.split(" ").join("-").toLocaleLowerCase()

    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.html`;
    a.click();

    URL.revokeObjectURL(url);
    reset();
  };

  const onSubmitHandler: SubmitHandler<Data> = (data: Data) => {
    setData(data);
    handleDownload();
    setData(defaultdata)
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
