import { create } from "zustand";
import { Brands } from "./types";

type initialData = {
  sfus: {
    name: string;
    position: string;
    email: string;
    phone: string;
    bookingLink: string;
    image: string;
  }
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
  sfus: {
    name: "Craig Cockburn",
    position: "Head of Mattering & Impact",
    email: "craig@serviceforge.com",
    phone: "1-877-381-4105",
    bookingLink: "https://serviceforgecanada.setmore.com/",
    image:
      "https://storage.googleapis.com/email_signatures/ServiceForge/ca/images/craig-cockburn.jpg",
  },
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
  }
};

type SignatureStoreTypes = {
  isFormValid: boolean;
  isLinkedIn: boolean;
  region: string;
  inputFocus: boolean;
  data: Brands;
  setIsLinkedIn: (isLinkedIn: boolean) => void;
  setRegion: (region: string) => void;
  setIsFormValid: (isFormValid: boolean) => void;
  setInputFocus: (inputFocus: boolean) => void;
  setData: (data: Brands) => void;
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
  isLinkedIn: false,
  isFormValid: false,
  region: "us",
  inputFocus: true,
  setIsFormValid: (isFormValid: boolean) => set(() => ({ isFormValid })),
  setIsLinkedIn: (isLinkedIn: boolean) => set(() => ({ isLinkedIn })),
  setData: (data: Brands) => set(() => ({ data })),
  setRegion: (region: string) => set(() => ({ region })),
  setInputFocus: (inputFocus: boolean) => set(() => ({ inputFocus })),
}));
