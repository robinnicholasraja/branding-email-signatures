import { UseFormRegister } from "react-hook-form";

export type InputGroupTypes = {
  label: string;
  type: string;
  registerName:
    | "role"
    | "email"
    | "username"
    | "phoneNumber"
    | "phoneNumberText"
    | "bookingLink"
    | "imageName"
    | "imageAlt";
  register: UseFormRegister<Serviceforgeca>;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  error?:any
};

export type Serviceforgeca = {
  username: string;
  role: string;
  email: string;
  phoneNumber: string;
  phoneNumberText: string;
  bookingLink: string;
  imageName: string;
  imageAlt: string;
};
