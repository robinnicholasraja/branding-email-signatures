import React, { useState } from "react";
import { CodeBlock } from "../(components)/CodeBlock";
import { useSignatureStore } from "@/store/store";
import Link from "next/link";

const SignaturePreview = ({ content }: { content: string }) => {
  const { isFormValid, inputFocus } = useSignatureStore((state) => state);

  const [showCodeBlock, setShowCodeBlock] = useState<boolean>(false);
  const handleShowCodeBlock = () => {
    setShowCodeBlock(!showCodeBlock);
  };
  return (
    <div className="w-1/2 h-full sticky top-0">
      <h2 className="text-2xl font-bold mb-4">Signature Preview</h2>
      <iframe
        title="Signature Preview"
        srcDoc={content}
        width="100%"
        height="300"
        className={`border ${
          inputFocus ? "border-sky-500" : "border-slate-800"
        } p-2 bg-white rounded-lg overflow-hidden`}
      ></iframe>
      <div className="flex items-center justify-start gap-8">
        <button
          type="submit"
          value="Download Signature"
          form="signature-form"
          disabled={!isFormValid}
          className={`flex gap-x-2 px-5 py-2 text-sm leading-5 rounded-full font-semibold mt-4 text-white ${
            isFormValid
              ? "bg-sky-500 hover:bg-sky-700 cursor-pointer"
              : "bg-gray-300 hover:bg-gray-400 cursor-not-allowed"
          }`}
        >
          <svg className="w-5 h-5" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" fill="currentColor"></path></svg>
          Download
        </button>
        <button className=" bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold mt-4 text-white" onClick={handleShowCodeBlock}>
          <span className="flex gap-x-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                fill="currentColor"
              ></path>
            </svg>
            <span>{showCodeBlock ? "Hide" : "Show"} code</span>
          </span>
        </button>

        <Link
          href={{
            pathname: "/signatures/htmleditor",
            query: { htmlContent: content },
          }}
          className="flex gap-x-2 bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold mt-4 text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          HTML Editor
        </Link>
      </div>
      {showCodeBlock && (
        <div className="mt-2 max-w-[1000px] max-h-[600px] overflow-scroll">
          {showCodeBlock && <CodeBlock markup={content} />}
        </div>
      )}
    </div>
  );
};

export default SignaturePreview;
