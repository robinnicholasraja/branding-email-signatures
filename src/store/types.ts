import { UseFormRegister } from "react-hook-form";

export type RegisterNameTypes = "image" | "position" | "name" | "email" | "phone" | "bookingLink";

export type InputsTypes = {
  label: string;
  type: string;
  registerName: RegisterNameTypes;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  error: string | undefined;
};

export type SFCAInputGroupTypes = InputsTypes & {
  register: UseFormRegister<Brands>;
};

export type WRInputGroupTypes = InputsTypes & {
  register: UseFormRegister<Brands>;
};


export type Data = {
  name: string;
  position: string;
  email: string;
  phone: string;
  bookingLink: string;
  image: string;
};

export type WR = Data & {
  source: string
}

export type InputTypes = InputsTypes;
export type InputGroupTypes = SFCAInputGroupTypes | WRInputGroupTypes;
export type Brands = Data | WR
