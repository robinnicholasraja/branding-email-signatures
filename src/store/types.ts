import { UseFormRegister } from "react-hook-form";

export type RegisterNameTypes = "image" | "position" | "name" | "email" | "phone" | "bookingLink" | "source";

export type InputsTypes = {
  label: string;
  type: string;
  registerName: RegisterNameTypes;
};

export type SFCAInputGroupTypes = InputsTypes & {
  register: UseFormRegister<Brands>;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  error: string | undefined;
};

export type WRInputGroupTypes = InputsTypes & {
  register: UseFormRegister<Brands>;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  error: string | undefined;
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
