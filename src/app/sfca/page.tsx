"use client";
import React, { useEffect } from "react";
import ServiceForgeCaSignature from "./ServiceForgeCaSignature";
import Form from "@/app/(components)/Form";
import { initialData, useSignatureStore } from "@/store/store";
import { SFCAInputs } from "@/FormFields/SFCA";
import SignaturePreview from "../(components)/SignaturePreview";

const SFCA = () => {
  const { data, setData } = useSignatureStore((state) => state);
  useEffect(() => {
    setData(initialData["sfca"]);
  }, []);

  const content = ServiceForgeCaSignature(data);

  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="bg-gray-100 p-8 rounded-lg w-full">
          <h1 className="mb-8 text-2xl">Serviceforge Signature Form</h1>
          <div className="flex justify-between gap-10 relative">
            <div className="w-1/2">
              <Form
                content={content}
                inputFields={SFCAInputs}
                defaultData={initialData["sfca"]}
              />
            </div>
            <SignaturePreview content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SFCA;
