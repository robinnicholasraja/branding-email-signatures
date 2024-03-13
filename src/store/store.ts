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
    phone: "18888222034",
    phoneText: "1-888-822-2034",
    bookingLink: "https://karenb.setmore.com/",
    imageName: "karen-booze",
    imageAlt: "Karen Booze",
    source: "trustpilot", // optional field as it is not used by sfca form but will be used for the form validation
  },
  wr: {
    name: "Shanna Ross",
    position: "Lead Account Executive",
    email: "shanna@wellreceived.com",
    phone: "1800-800-4449",
    phoneText: "800-800-4449",
    bookingLink: "https://shannawellreceived.setmore.com/",
    imageName: "wr-hand-profile",
    imageAlt: "Shane Ross",
    source: "trustpilot",
  },
};

type SignatureStoreTypes = {
  data: Data;
  setData: (sfcaData: Data) => void;
};

export const useSignatureStore = create<SignatureStoreTypes>()((set) => ({
  data: {
    name: "",
    position: "",
    email: "",
    phone: "",
    phoneText: "",
    bookingLink: "",
    imageName: "",
    imageAlt: "",
    source: "",
  },
  setData: (data: Data) => set(() => ({ data })),
}));
