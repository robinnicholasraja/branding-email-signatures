"use client";
import React, { useEffect, useState } from "react";
import ServiceForgeCaSignature from "./ServiceForgeCaSignature";
import Form from "@/app/(components)/Form";
import { initialData, useSignatureStore } from "@/store/store";
import { SFCAInputs } from "@/FormFields/SFCA";
import SignaturePreview from "../(components)/SignaturePreview";
import Modal from "../(components)/Modal";

const SFCA = () => {
  const { data, setData } = useSignatureStore((state) => state);

  useEffect(() => {
    setData(initialData["sfca"]);
  }, []);

  const content = ServiceForgeCaSignature(data);

  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="bg-gray-900 text-slate-100 p-8 rounded-lg w-full">
          <h1 className="mb-8 text-2xl">Serviceforge Signature Form</h1>
          <div className="flex justify-between gap-10 relative">
            <div className="w-1/2">
              <Form
                content={content}
                inputFields={SFCAInputs}
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
