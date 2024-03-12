import React, { useState } from "react";
import { CodeBlock } from "../(components)/CodeBlock";

const SignaturePreview = ({ content }: { content: string }) => {
  const [showCodeBlock, setShowCodeBlock] = useState<Boolean>(false);
  const handleShowCodeBlock = () => {
    setShowCodeBlock(!showCodeBlock);
  };
  return (
    <div className="w-1/2 h-screen sticky top-0">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Signature Preview
      </h2>
      <iframe
        title="Signature Preview"
        srcDoc={content}
        width="100%"
        height="300"
      ></iframe>
      <div className="flex items-center justify-start gap-8">
        <button
          type="submit"
          value="Download Signature"
          form="signature-form"
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold mt-4 text-white cursor-pointer"
        >
          Download
        </button>
        <button
          onClick={handleShowCodeBlock}
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold mt-4 text-white"
        >
          {showCodeBlock ? "Hide" : "Show"} codeblock
        </button>
      </div>
      <div className="mt-5">
        {showCodeBlock && <CodeBlock markup={content} />}
      </div>
    </div>
  );
};

export default SignaturePreview;
