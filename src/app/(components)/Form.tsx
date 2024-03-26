"use client";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Brands, InputTypes, RegisterNameTypes } from "@/store/types";
import InputGroup from "./InputGroup";
import { baseSchema, WRSchema } from "@/store/schema";
import { usePathname } from "next/navigation";
import { initialData, useSignatureStore } from "@/store/store";
import RadioInputList from "./RadioInputList";
import { useEffect } from "react";

const SignatureForm = ({
  content,
  inputFields,
}: {
  content: string;
  inputFields: InputTypes[] | undefined;
}) => {
  // Global state and setter method from the store
  const { data, setData, region, setRegion, setIsFormValid, setInputFocus } =
    useSignatureStore((state) => state);

  const brandsWithRegions = ["sf", "ac", "lex", "af"];

  // Pathname to determine which form to render with initial data
  const pathname = usePathname();
  const index = pathname.split("/")[2];
  const defaultdata = brandsWithRegions.includes(index)
    ? initialData[`${index}${region}`]
    : initialData[index];

  const getCurrentRouteSchema = (currentRoute: string) => {
    switch (currentRoute) {
      case "/signatures/sf":
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
    formState: { errors, isValid }, // Gives access to the errors object
    setValue, // sets the value of the input manually
    watch, // watches the value of the input
    setFocus, // sets the focus on the input
  } = useForm({
    resolver: yupResolver(finalSchema), // yup schema validation with resolver
    defaultValues: defaultdata, // sets the default values of the form inputs
    mode: "all", // mode to validate the form inputs - all = onChange, onBlue, onSubmit
  });

  const watchData = watch(); // watches the value of all the inputs in real time

  useEffect(() => {
    Object.entries(defaultdata).forEach(([key, value]) =>
      setValue(key as keyof Brands, value)
    );
  }, [region]);

  useEffect(() => {
    setIsFormValid(true);
  }, []);

  /**
   * Handles the keyup event for an input field, updating the field value
   * and updating the global state with the latest form data.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} event - The keyup event.
   * @param {RegisterNameTypes} registerName - The name of the input field.
   */
  const handleKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    registerName: RegisterNameTypes
  ) => {
    // Update the field value on keyup
    const updatedValue = event.currentTarget.value; // Get the updated value from the input field
    setFocus(registerName); // sets the focus on the current input
    setValue(registerName, updatedValue); // Update the value of the input field in the form state
    setData(watchData); // Update the global state with the latest form data
    setIsFormValid(isValid);
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
    setRegion(region);
  };

  /**
   * Handles the form submission.
   *
   * This function updates the global state with the form data,
   * triggers the download of the HTML content, updates the
   * global state with the default data, and resets the form.
   *
   * @param {Brands} data - The form data.
   */
  const onSubmitHandler: SubmitHandler<Brands> = (data: Brands) => {
    // Update the global state with the form data
    setData(data);

    // Trigger the download of the HTML content
    handleDownload();

    // Update the global state with the default data
    setData(defaultdata);

    Object.entries(defaultdata).forEach(([key, value]) =>
      setValue(key as keyof Brands, value)
    );
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
              error={errors?.[registerName as keyof typeof errors]?.message}
              handleKeyUp={(e) =>
                handleKeyUp(e, registerName as RegisterNameTypes)
              }
              onFocus={() => setInputFocus(true)}
            />
          );
        })}
        {brandsWithRegions.includes(index) ? (
          <div className="flex gap-x-6">
            {["US", "CA"].map((regionName) => {
              return (
                <label
                  key={regionName}
                  htmlFor={regionName}
                  className="flex gap-x-2 border border-slate-400 has-[:checked]:border-green-400 has-[:checked]:border-2 rounded-lg pl-6 pr-2 py-2 cursor-pointer relative"
                >
                  {regionName}
                  <input
                    type="radio"
                    value={regionName.toLowerCase()}
                    id={regionName}
                    name="region"
                    checked={region === regionName.toLocaleLowerCase()}
                    onChange={() => setRegion(regionName.toLocaleLowerCase())}
                    className="appearance-none before:rounded-full before:bg-slate-400 before:checked:bg-green-400 before:absolute before:w-2 before:h-2 before:top-1/2 before:left-2 before:-translate-y-1/2"
                  />
                </label>
              );
            })}
          </div>
        ) : null}
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
