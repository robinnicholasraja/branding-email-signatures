"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ServiceForgeCaSignature from "./ServiceForgeCaSignature";
import Form from "@/app/sfca/(components)/Form";
import { useSignatureStore } from "@/store/store";
import { Serviceforgeca } from "@/types";

const SFCA = () => {
  const { sfcaData, setSfcaData } = useSignatureStore((state) => state);

  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="bg-gray-100 p-8 rounded-lg w-full">
          <h1 className="mb-8 text-2xl">Serviceforge Signature Form</h1>
          <div className="flex justify-between gap-10 relative">
            <Form />
            <div className="w-1/2 h-screen sticky top-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Signature Preview
              </h2>
              <iframe
                title="Signature Preview"
                srcDoc={ServiceForgeCaSignature(sfcaData)}
                width="100%"
                height="300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SFCA;
