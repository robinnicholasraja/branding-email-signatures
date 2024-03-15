import { create } from "zustand";
import { Data } from "./types";

type initialData = {
  [key: string]: Data;
};

export const initialData: initialData = {
  sfca: {
    name: "Karen Booze",
    position: "Director of Business Development",
    email: "karen@serviceforge.com",
    phone: "1-888-822-2034",
    bookingLink: "https://karenb.setmore.com/",
    image: "https://storage.googleapis.com/email_signatures/ServiceForge/ca/images/karen-booze.jpg",
    source: "trustpilot", // optional field as it is not used by sfca form but will be used for the form validation
  },
  wr: {
    name: "Shanna Ross",
    position: "Lead Account Executive",
    email: "shanna@wellreceived.com",
    phone: "1800-800-4449",
    bookingLink: "https://shannawellreceived.setmore.com/",
    image: "https://storage.googleapis.com/email_signatures/wellreceived/images/wr-hand-profile.png",
    source: "trustpilot",
  },
};

type SignatureStoreTypes = {
  isFormValid: boolean;
  data: Data;
  setData: (sfcaData: Data) => void;
  setIsFormValid: (isFormValid: boolean) => void;
};

export const useSignatureStore = create<SignatureStoreTypes>()((set) => ({
  data: {
    name: "",
    position: "",
    email: "",
    phone: "",
    bookingLink: "",
    image: "",
    source: "",
  },
  isFormValid: false,
  setIsFormValid: (isFormValid: boolean) => set(() => ({ isFormValid })),
  setData: (data: Data) => set(() => ({ data })),
}));
