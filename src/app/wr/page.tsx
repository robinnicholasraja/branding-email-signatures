"use client";
import React, { useEffect } from "react";
import SignatureWithTrustPilot from "./WellReceivedSignatures";
import Form from "@/app/(components)/Form";
import { initialData, useSignatureStore } from "@/store/store";
import { WRInputs } from "@/FormFields/WR";
import SignaturePreview from "../(components)/SignaturePreview";

const WR = () => {
  const { data, setData } = useSignatureStore((state) => state);

  useEffect(() => {
    setData(initialData["wr"]);
  }, []);

  const content = SignatureWithTrustPilot(data);

  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="bg-gray-900 text-slate-100 p-8 rounded-lg">
          <h1 className="mb-8 text-2xl">WellReceived Signature Form</h1>
          <div className="flex justify-between gap-10">
            <div className="w-1/2">
              <Form
                content={content}
                inputFields={WRInputs}
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
