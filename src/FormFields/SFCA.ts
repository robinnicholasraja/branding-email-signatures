
type SFCAInputsTypes = {
  label: string;
  type: string;
  registerName: "role" | "email" | "username" | "phoneNumber" | "phoneNumberText" | "bookingLink" | "imageName" | "imageAlt";
};

export const SFCAInputs: SFCAInputsTypes[] = [
  {
    label: "Username",
    type: "text",
    registerName: "username",
  },
  {
    label: "Role",
    type: "text",
    registerName: "role",
  },
  {
    label: "Email",
    type: "text",
    registerName: "email",
  },
  {
    label: "Phone Number",
    type: "text",
    registerName: "phoneNumber",
  },
  {
    label: "Phone Number Text",
    type: "text",
    registerName: "phoneNumberText",
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
