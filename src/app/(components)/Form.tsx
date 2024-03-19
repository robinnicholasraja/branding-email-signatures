"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Data, InputTypes } from "@/store/types";
import InputGroup from "./InputGroup";
import { baseSchema, WRSchema } from "@/store/schema";
import { usePathname } from "next/navigation";
import { initialData, useSignatureStore } from "@/store/store";
import RadioInputList from "./RadioInputList";

const SignatureForm = ({
  content,
  inputFields,
}: {
  content: string;
  inputFields: InputTypes[] | undefined;
}) => {
  // Global state and setter method from the store
  const { data, setData, isLinkedIn, setIsLinkedIn } = useSignatureStore(
    (state) => state
  );

  // Pathname to determine which form to render with initial data
  const pathname = usePathname();
  const index = pathname.split("/")[2];
  const defaultdata = initialData[index];

  const getCurrentRouteSchema = (currentRoute: string) => {
    switch (currentRoute) {
      case "/signatures/sfca":
        return baseSchema;
      case "/signatures/wr":
        return WRSchema;
      default:
        return baseSchema; // You can define a default schema if needed
    }
  };

  const finalSchema = getCurrentRouteSchema(pathname); // Implement this function to return the correct schema based on the route

  const {
    register, // register's input fields to the form
    handleSubmit, // handles form submission automatically with onSubmit
    formState: { errors }, // Gives access to the errors object
    reset, // resets the form
    setValue, // sets the value of the input manually
    watch, // watches the value of the input
  } = useForm({
    resolver: yupResolver(finalSchema), // yup schema validation with resolver
    defaultValues: defaultdata, // sets the default values of the form inputs
    mode: "all", // mode to validate the form inputs - all = onChange, onBlue, onSubmit
  });

  const watchData = watch(); // watches the value of all the inputs in real time

  /**
   * Handles the keyup event for an input field, updating the field value
   * and updating the global state with the latest form data.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} event - The keyup event.
   * @param {RegisterNameTypes} registerName - The name of the input field.
   */
  const handleKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    registerName: string
  ) => {
    // Update the field value on keyup
    const updatedValue = event.currentTarget.value; // Get the updated value from the input field
    setValue(
      registerName as
        | "image"
        | "position"
        | "name"
        | "email"
        | "phone"
        | "bookingLink",
      updatedValue
    ); // Update the value of the input field in the form state
    setData(watchData); // Update the global state with the latest form data
  };

  /**
   * Handles the download of the HTML content of the form.
   *
   * This function generates a Blob object from the HTML content,
   * creates a URL for the Blob, creates a download link element,
   * sets the URL and file name of the download link, triggers the
   * click event of the download link, and finally revokes the URL.
   */

  const handleDownload = () => {
    // Generate a Blob object from the HTML content
    const htmlContent = content;
    const blob = new Blob([htmlContent], { type: "text/html" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a download link element
    const fileName = data.name.split(" ").join("-").toLocaleLowerCase();
    const a = document.createElement("a");

    // Set the URL and file name of the download link
    a.href = url;
    a.download = `${fileName}.html`;

    // Trigger the click event of the download link
    a.click();

    // Revoke the URL after the download is complete
    URL.revokeObjectURL(url);
  };

  /**
   * Handles the form submission.
   *
   * This function updates the global state with the form data,
   * triggers the download of the HTML content, updates the
   * global state with the default data, and resets the form.
   *
   * @param {Data} data - The form data.
   */
  const onSubmitHandler: SubmitHandler<Data> = (data: Data) => {
    // Update the global state with the form data
    setData(data);

    // Trigger the download of the HTML content
    handleDownload();

    // Update the global state with the default data
    setData(defaultdata);

    // Reset the form
    reset();
  };

  const sourceTypes = [
    { label: "Trustpilot", value: "trustpilot" },
    { label: "UpCity", value: "upcity" },
    { label: "Google", value: "google" },
    { label: "Referral Credit", value: "referral" },
    { label: "We Care", value: "wecare" },
  ];

  return (
    <div className="flex flex-col">
      <form
        id="signature-form"
        className="space-y-8"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        {inputFields?.map(({ label, type, registerName }: InputTypes) => {
          return (
            <InputGroup
              key={registerName}
              label={label}
              type={type}
              register={register}
              registerName={registerName}
              error={
                errors?.[registerName as keyof typeof errors]?.message
              }
              handleKeyUp={(e) => handleKeyUp(e, registerName)}
            />
          );
        })}
        {pathname === "/signatures/wr" ? (
          <RadioInputList
            label="Source"
            register={register}
            registerName="source"
            sourceTypes={sourceTypes}
          />
        ) : null}
      </form>
    </div>
  );
};

export default SignatureForm;
