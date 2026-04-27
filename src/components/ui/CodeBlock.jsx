import React, { useState } from "react";
import "./CodeBlock.css";

const CodeBlock = ({
  code,
  language = "json",
  showLineNumbers = false,
  maxHeight = null,
}) => {
  const [copied, setCopied] = useState(false);
  const lines = code.split("\n");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block" style={{ maxHeight }}>
      <div className="code-header">
        <span className="code-language">{language}</span>
        <button className="code-copy" onClick={handleCopy}>
          {copied ? "✓ Copiado!" : "📋 Copiar"}
        </button>
      </div>
      <pre className="code-content">
        {showLineNumbers
          ? lines.map((line, idx) => (
              <div key={idx} className="code-line">
                <span className="line-number">{idx + 1}</span>
                <span className="line-text">{line || " "}</span>
              </div>
            ))
          : code}
      </pre>
    </div>
  );
};

export default CodeBlock;
