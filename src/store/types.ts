import { UseFormRegister } from "react-hook-form";

export type RegisterNameTypes =
  | "position"
  | "email"
  | "name"
  | "phone"
  | "phoneText"
  | "bookingLink"
  | "imageName"
  | "imageAlt"
  | "source";

export type InputsTypes = {
  label: string;
  type: string;
  registerName: RegisterNameTypes;
};

export type InputGroupTypes = InputsTypes & {
  register: UseFormRegister<Data>;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  error: string | undefined;
};

export type Data = {
  name: string;
  position: string;
  email: string;
  phone: string;
  phoneText: string;
  bookingLink: string;
  imageName: string;
  imageAlt: string;
  source: string;
};
