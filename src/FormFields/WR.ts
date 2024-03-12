import { InputsTypes } from "@/store/types";

export const WRInputs: InputsTypes[] = [
  {
    label: "Username",
    type: "text",
    registerName: "name",
  },
  {
    label: "Role",
    type: "text",
    registerName: "position",
  },
  {
    label: "Email",
    type: "text",
    registerName: "email",
  },
  {
    label: "Phone Number",
    type: "text",
    registerName: "phone",
  },
  {
    label: "Phone Number Text",
    type: "text",
    registerName: "phoneText",
  },
  {
    label: "Booking Link",
    type: "text",
    registerName: "bookingLink",
  },
  {
    label: "Image Name",
    type: "text",
    registerName: "imageName",
  },
  {
    label: "Image Alt",
    type: "text",
    registerName: "imageAlt",
  },
];
