"use client";
import React, { useEffect } from "react";
import SignatureWithTrustPilot from "./WellReceivedSignatures";
import Form from "@/app/(components)/Form";
import { initialData, useSignatureStore } from "@/store/store";
import { WRInputs } from "@/FormFields/WR";
import SignaturePreview from "../(components)/SignaturePreview";
import RadioInputList from "../(components)/RadioInputList";

const WR = () => {
  const { data, setData } = useSignatureStore((state) => state);

  useEffect(() => {
    setData(initialData["wr"]);
  }, []);

  const content = SignatureWithTrustPilot(data);

  const sourceTypes = [
    { label: "Trustpilot", value: "trustpilot" },
    { label: "UpCity", value: "upcity" },
    { label: "Google", value: "google" },
    { label: "Referral Credit", value: "referral" },
    { label: "We Care", value: "wecare" },
  ];

  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="bg-gray-100 p-8 rounded-lg">
          <h1 className="mb-8 text-2xl">WellReceived Signature Form</h1>
          <div className="flex justify-between gap-10">
            <div className="w-1/2">
              <Form
                content={content}
                inputFields={WRInputs}
              />
              <RadioInputList
                name="source"
                label="Source"
                data={data}
                setData={setData}
                sourceTypes={sourceTypes}
              />
            </div>

            <SignaturePreview content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WR;
