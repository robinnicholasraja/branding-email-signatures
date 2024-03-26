"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/ext-language_tools";
import { initialData } from "@/store/store";
import WellReceivedSignatures from "@/app/SignatureHTML/WellReceivedSignatures";
import pretty from "pretty";

const HTMLFileEditor: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [iframeContent, setIframeContent] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const query = useSearchParams();

  const router = useRouter();

  useEffect(() => {
    const setHtmlMarkUp = (content: string) => {
      const prettiedMarkup = pretty(content, {
        ocd: true,
      });
      setHtmlContent(prettiedMarkup);
      setIframeContent(prettiedMarkup);
    };

    if (query.has("htmlContent")) {
      const content = query.get("htmlContent") as string;
      setHtmlMarkUp(content);
    } else {
      const data = initialData["wr"];
      setHtmlMarkUp(WellReceivedSignatures(data));
    }
    router.replace("/signatures/htmleditor");
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result as string;
        setHtmlContent(content);
        setIframeContent(content);
        setFileName(file.name);
      };
      reader.readAsText(file);
    }
  };

  const handleChange = (value: string) => {
    setHtmlContent(value);
    setIframeContent(value);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName || "Signature.html";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <section className="container">
      <div className="py-4">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-sky-500 text-slate-100 rounded-lg absolute top-2 left-2"
        >
          Back to homepage
        </Link>
        <h1 className="text-center flex-1 text-3xl font-bold">HTML EDITOR</h1>
      </div>
      <div className="flex justify-center py-4">
        <input
          type="file"
          accept=".html"
          onChange={handleFileChange}
          className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-100"/>
      </div>
      <div className="flex justify-between items-start gap-6">
        <AceEditor
          mode="html"
          theme="twilight" // Set the theme here
          fontSize={14}
          lineHeight={18}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={htmlContent}
          onChange={(newValue) => {
            handleChange(newValue);
          }}
          name="HTML-EDITOR"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          style={{
            width: "600px",
            height: "500px",
          }}
        />
        <div className="w-1/2">
          <iframe
            title="HTML Preview"
            srcDoc={iframeContent}
            onLoad={(event) => {
              let iframeDocument = (event.target as HTMLIFrameElement)
                ?.contentDocument;
              const iframeContentWindow = (event.target as HTMLIFrameElement)
                ?.contentWindow;
              if (iframeDocument) {
                iframeDocument.designMode = "on";
              }
              iframeContentWindow?.document?.addEventListener("input", () => {
                const updatedContent =
                  iframeContentWindow?.document.documentElement.outerHTML;
                setHtmlContent(updatedContent);
              });
            }}
            className="border border-sky-400 w-full h-96 pt-8 pl-8 mb-4 p-2 bg-white rounded-lg overflow-hidden"
          />
          <button
            onClick={handleDownload}
            className="flex gap-x-2 items-center bg-sky-400 text-white rounded-lg px-4 py-2"
          >
            <svg
              className="w-5 h-5"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                fill="currentColor"
              ></path>
            </svg>
            Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default HTMLFileEditor;
