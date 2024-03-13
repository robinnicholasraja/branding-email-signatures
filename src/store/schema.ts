import * as yup from "yup";
export const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    position: yup.string().required("Position is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    phone: yup.string().required("Phone Number is required"),
    bookingLink: yup
      .string()
      .required("Booking Link is required")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
    image: yup
      .string()
      .required("Image is required"),
    source: yup.string().required("Source is required"),
  })
  .required();
