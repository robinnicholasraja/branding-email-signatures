"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Serviceforgeca } from "@/types";
import InputGroup from "./InputGroup";
import { SFCAInputs } from "@/FormFields/SFCA";
import { useSignatureStore } from "@/store/store";
import ServiceForgeCaSignature from "../ServiceForgeCaSignature";

const schema = yup
  .object()
  .shape({
    username: yup.string().required("Name is required"),
    role: yup.string().required("Role is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    phoneNumberText: yup.string().required("Phone Number Text is required"),
    bookingLink: yup
      .string()
      .required("Booking Link is required")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
    imageName: yup
      .string()
      .required("Image is required")
      .max(30, "Max 30 characters"),
    imageAlt: yup
      .string()
      .required("Image Alt is required")
      .max(30, "Max 30 characters"),
  })
  .required();

const SignatureForm = () => {
  const { sfcaData, setSfcaData } = useSignatureStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<Serviceforgeca>({
    resolver: yupResolver(schema),
    defaultValues: sfcaData,
    mode: "all",
  });
  const watchData = watch();

  const handleKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    registerName:
      | "role"
      | "email"
      | "username"
      | "phoneNumber"
      | "phoneNumberText"
      | "bookingLink"
      | "imageName"
      | "imageAlt"
  ) => {
    // Update the field value on keyup
    const updatedValue = event.currentTarget.value;
    setValue(registerName, updatedValue);
    setSfcaData(watchData);
  };

  const handleDownload = () => {
    const htmlContent = ServiceForgeCaSignature(sfcaData);
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "signature.html";
    a.click();

    URL.revokeObjectURL(url);
    setSfcaData({
      username: "Karen Booze",
      role: "Director of Business Development",
      email: "karen@serviceforge.com",
      phoneNumber: "+18888222034",
      phoneNumberText: "1-888-822-2034",
      bookingLink: "https://karenb.setmore.com/",
      imageName: "karen-booze",
      imageAlt: "Karen Booze",
    });
  };

  const onSubmitHandler: SubmitHandler<Serviceforgeca> = (
    data: Serviceforgeca
  ) => {
    setSfcaData(data);
    handleDownload();
    reset();
  };
  return (
    <div className="flex flex-col items-center">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmitHandler)}>
        {SFCAInputs.map(({ label, type, registerName }) => {
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
        <input
          type="submit"
          value="Download Signature"
          className="mt-10 px-4 py-2 rounded-lg bg-green-500 text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default SignatureForm;