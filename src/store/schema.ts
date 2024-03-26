import * as yup from "yup";
export const baseSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    position: yup.string().required("Position is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    phone: yup.string().required("Phone Number is required"),
    bookingLink: yup.string().required("Booking Link is required"),
    image: yup.string().required("Image is required"),
  })
  .required();

export const WRSchema = baseSchema
  .shape({
    source: yup.string().required("Source is required"),
  })
  .required();
