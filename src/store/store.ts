import { create } from "zustand";
import { Brands } from "./types";

type initialData = {
  sfca: {
    name: string;
    position: string;
    email: string;
    phone: string;
    bookingLink: string;
    image: string;
  };
  wr: {
    name: string;
    position: string;
    email: string;
    phone: string;
    bookingLink: string;
    image: string;
    source: string;
  };
  [key: string]: Brands;
};

export const initialData: initialData = {
  sfca: {
    name: "Karen Booze",
    position: "Director of Business Development",
    email: "karen@serviceforge.com",
    phone: "1-888-822-2034",
    bookingLink: "https://karenb.setmore.com/",
    image:
      "https://storage.googleapis.com/email_signatures/ServiceForge/ca/images/karen-booze.jpg",
  },
  wr: {
    name: "Shanna Ross",
    position: "Lead Account Executive",
    email: "shanna@wellreceived.com",
    phone: "1800-800-4449",
    bookingLink: "https://shannawellreceived.setmore.com/",
    image:
      "https://storage.googleapis.com/email_signatures/wellreceived/images/wr-hand-profile.png",
    source: "trustpilot",
  },
};

type SignatureStoreTypes = {
  isFormValid: boolean;
  isLinkedIn: boolean;
  data: Brands;
  setIsFormValid: (isFormValid: boolean) => void;
  setData: (sfcaData: Brands) => void;
  setIsLinkedIn: (isLinkedIn: boolean) => void;
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
    linkedin:""
  },
  isLinkedIn: false,
  isFormValid: false,
  setIsFormValid: (isFormValid: boolean) => set(() => ({ isFormValid })),
  setIsLinkedIn: (isLinkedIn: boolean) => set(() => ({ isLinkedIn })),
  setData: (data: Brands) => set(() => ({ data })),
}));
