"use client"
import React, { useState, ChangeEvent } from "react";
import SignatureWithTrustPilot from "./WellReceivedSignatures";

const WR = () => {
  const [signatureData, setSignatureData] = useState({
    name: "Shanna Ross",
    position: "Lead Account Executive",
    email: "shanna@wellreceived.com",
    phone: "800-800-4449",
    bookingLink: "https://shannawellreceived.setmore.com/",
    imageUrl: "https://assets.wellreceived.com/wellreceived/mailtemplates/images/shanna-ross@2x.png",
    source: "trustpilot",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone" && value !== "" && !/^[\d-]+$/.test(value)) {
      return;
    }
    
    setSignatureData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    const htmlContent = SignatureWithTrustPilot(signatureData);
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "signature.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <section>
      <div className="container mx-auto p-8 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Signature Form</h2>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-500">Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={signatureData.imageUrl}
              onChange={handleInputChange}
              className="p-2 border shadow-sm rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500">Name:</label>
            <input
              type="text"
              name="name"
              value={signatureData.name}
              onChange={handleInputChange}
              className="p-2 border shadow-sm rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-500">Position:</label>
            <input
              type="text"
              name="position"
              value={signatureData.position}
              onChange={handleInputChange}
              className="p-2 border shadow-sm rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-500">Email:</label>
            <input
              type="text"
              name="email"
              value={signatureData.email}
              onChange={handleInputChange}
              className="p-2 border shadow-sm rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-500">Phone:</label>
            <input
              type="text"
              name="phone"
              value={signatureData.phone}
              onChange={handleInputChange}
              className="p-2 border shadow-sm rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-500">Booking Link:</label>
            <input
              type="text"
              name="bookingLink"
              value={signatureData.bookingLink}
              onChange={handleInputChange}
              className="p-2 border shadow-sm rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-500">Source:</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  className="mr-1"
                  name="source"
                  value="trustpilot"
                  checked={signatureData.source === "trustpilot"}
                  onChange={handleInputChange}
                />
                Trustpilot
              </label>
              <label>
                <input
                  type="radio"
                  className="mr-1"
                  name="source"
                  value="upcity"
                  checked={signatureData.source === "upcity"}
                  onChange={handleInputChange}
                />
                UpCity
              </label>
              <label>
                <input
                  type="radio"
                  className="mr-1"
                  name="source"
                  value="google"
                  checked={signatureData.source === "google"}
                  onChange={handleInputChange}
                />
                Google
              </label>
              <label>
                <input
                  type="radio"
                  className="mr-1"
                  name="source"
                  value="referral"
                  checked={signatureData.source === "referral"}
                  onChange={handleInputChange}
                />
                Referral Credit
              </label>
              <label>
                <input
                  type="radio"
                  className="mr-1"
                  name="source"
                  value="wecare"
                  checked={signatureData.source === "wecare"}
                  onChange={handleInputChange}
                />
                We Care
              </label>
            </div>
          </div>

        </form>

        <div className="mt-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Signature Preview</h2>
          <iframe
            title="Signature Preview"
            srcDoc={SignatureWithTrustPilot(signatureData)}
            width="100%"
            height="300"
          ></iframe>
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Download Signature
          </button>
        </div>
      </div>
    </section>
  );
};

export default WR;
