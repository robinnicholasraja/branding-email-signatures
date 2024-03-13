"use client";
import React, { useEffect } from "react";
import Form from "@/app/(components)/Form";
import SignaturePreview from "@/app/(components)/SignaturePreview";
import { initialData, useSignatureStore } from "@/store/store";

// ADD SIGNATURES HTML HERE
import WRSignature from "@/app/SignatureHTML/WellReceivedSignatures";
import ServiceForgeCaSignature from "@/app/SignatureHTML/ServiceForgeCaSignature";

// ADD SIGNATURES INPUT FIELD ARRAY HERE
import { InputsTypes } from "@/store/types";
import { WRInputs } from "@/FormFields/WR";
import { SFCAInputs } from "@/FormFields/SFCA";

const Brand = ({ params }: { params: { brand: string } }) => {
  const { data, setData } = useSignatureStore((state) => state);

  useEffect(() => {
    setData(initialData[params.brand]);
  }, []);

  const getSignatureHtml = (brand: string) => {
    const SignatureHtml = [
      { brandName: "wr", data: WRSignature(data), inputFields: WRInputs },
      {
        brandName: "sfca",
        data: ServiceForgeCaSignature(data),
        inputFields: SFCAInputs,
      },
      // Add other brands config here
    ];

    return {
      htmlContent: SignatureHtml.find((item) => item?.brandName === brand)
        ?.data as string,
      inputFields: SignatureHtml.find((item) => item?.brandName === brand)
        ?.inputFields,
    };
  };

  const { htmlContent, inputFields } = getSignatureHtml(params.brand);

  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="bg-gray-900 text-slate-100 p-8 rounded-lg w-full">
          <h1 className="mb-8 text-2xl">
            {params.brand.toUpperCase()} Signature Form
          </h1>
          <div className="flex justify-between gap-10 relative">
            <div className="w-1/2">
              <Form
                content={htmlContent}
                inputFields={inputFields as InputsTypes[]}
              />
            </div>
            <SignaturePreview content={htmlContent} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
