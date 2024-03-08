import React, { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import pretty from "pretty";

type CodeBlockProps = {
  markup: string;
};

export function CodeBlock(props: CodeBlockProps) {
  const { markup } = props;
  const [copy, setCopy] = useState<Boolean>(false);
  const prettiedMarkup = pretty(markup, { ocd: true });

  const handleClick = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false)
    }, 700);
    const text = prettiedMarkup;
    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return clipboardData.setData("Text", text);
    }
    if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      const textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy"); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  useEffect(() => {
    SyntaxHighlighter.registerLanguage("jsx", jsx);
  }, []);

  return (
    <div role="presentation" className="relative">
      <button
        className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold mt-4 text-white absolute right-4 top-4 flex items-center gap-2"
        onClick={handleClick}
      >
        <span>
          {copy ? 'Copied' : 'Copy'}
        </span>
      </button>
      <SyntaxHighlighter language="html" style={prism} showLineNumbers={true}>
        {prettiedMarkup}
      </SyntaxHighlighter>
    </div>
  );
}
