import { create } from "zustand";
import { Serviceforgeca } from "../types";

type SFCAtypes = {
  sfcaData: Serviceforgeca;
  setSfcaData: (sfcaData: Serviceforgeca) => void;
};

export const useSignatureStore = create<SFCAtypes>()((set) => ({
  sfcaData: {
    username: "Karen Booze",
    role: "Director of Business Development",
    email: "karen@serviceforge.com",
    phoneNumber: "+18888222034",
    phoneNumberText: "1-888-822-2034",
    bookingLink: "https://karenb.setmore.com/",
    imageName: "karen-booze",
    imageAlt: "Karen Booze",
  },
  setSfcaData: (sfcaData: Serviceforgeca) => set(() => ({ sfcaData })),
}));
