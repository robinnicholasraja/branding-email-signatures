import React, { useState } from "react";
import { CodeBlock } from "../(components)/CodeBlock";
import Modal from "./Modal";

const SignaturePreview = ({ content }: { content: string }) => {
  const [showCodeBlock, setShowCodeBlock] = useState<boolean>(false);
  const handleShowCodeBlock = () => {
    setShowCodeBlock(!showCodeBlock);
  };
  return (
    <div className="w-1/2 h-full sticky top-0">
      <h2 className="text-3xl font-bold mb-4">Signature Preview</h2>
      <iframe
        title="Signature Preview"
        srcDoc={content}
        width="100%"
        height="300"
        className="border border-slate-900 pl-10 py-8 bg-white rounded-lg"
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
      <Modal toggleModal={showCodeBlock} setToggleModal={setShowCodeBlock}>
        <div className="mt-2 max-w-[1000px] max-h-[600px] overflow-scroll">
          {showCodeBlock && <CodeBlock markup={content} />}
        </div>
      </Modal>
    </div>
  );
};

export default SignaturePreview;