"use client";
import React, { useEffect, useState } from "react";
import Form from "@/app/(components)/Form";
import SignaturePreview from "@/app/(components)/SignaturePreview";
import { initialData, useSignatureStore } from "@/store/store";

// ADD SIGNATURES HTML HERE
import WRSignature from "@/app/SignatureHTML/WellReceivedSignatures";
import {
  ServiceForgeCaSignature,
  ServiceForgeUSSignature,
} from "@/app/SignatureHTML/ServiceForgeSignature";

// ADD SIGNATURES INPUT FIELD ARRAY HERE
import { InputTypes, WR } from "@/store/types";
import { WRInputs } from "@/FormFields/WR";
import { SFInputs } from "@/FormFields/SF";
import Link from "next/link";

const Brand = ({ params }: { params: { brand: string } }) => {
  const { data, setData, region } = useSignatureStore(
    (state) => state
  );
  const [pageData, setPageData] = useState({
    htmlContent: "" as string,
    inputFields: [] as InputTypes[],
  });

  useEffect(() => {
    if (params.brand === "wr") {
      setData(initialData[params.brand]);
    } else {
      setData(initialData[`${params.brand}${region}`]);
    }
  }, [region]);

  const getSignatureHtml = (brand: string) => {
    const SignatureHtml = [
      { brandName: "wr", data: WRSignature(data as WR), inputFields: WRInputs },
      {
        brandName: "sf",
        region: "us",
        data: ServiceForgeUSSignature(data),
        inputFields: SFInputs,
      },
      {
        brandName: "sf",
        region: "ca",
        data: ServiceForgeCaSignature(data),
        inputFields: SFInputs,
      },
      // Add other brands config here
    ];

    const signatureWithRegion =
      SignatureHtml.find(
        (item) => item?.region && item?.brandName === brand
      ) || SignatureHtml.find((item) => item?.brandName === brand);
        
    return {
      htmlContent: signatureWithRegion?.data as string,
      inputFields: signatureWithRegion?.inputFields,
    };
  };

  useEffect(() => {
    const { htmlContent, inputFields } = getSignatureHtml(params.brand);
    setPageData({ htmlContent, inputFields: inputFields as InputTypes[] });
  }, [region,data]);

  return (
    <section>
      <div className="flex p-4 relative mb-4">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-sky-500 text-slate-100 rounded-lg absolute top-2 left-2"
        >
          Back to homepage
        </Link>
        <h1 className="text-center flex-1 text-3xl">
          Email signature generator
        </h1>
      </div>
      <div className="container mx-auto pb-10">
        <div className="bg-gray-900 text-slate-100 p-8 rounded-lg w-full">
          <div>
            <h2 className="mb-8 text-2xl">
              {params.brand.toUpperCase()} Signature Form
            </h2>
          </div>
          <div className="flex justify-between gap-10 relative">
            <div className="w-1/2">
              <Form content={pageData.htmlContent} inputFields={pageData.inputFields} />
            </div>
            <SignaturePreview content={pageData.htmlContent} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
