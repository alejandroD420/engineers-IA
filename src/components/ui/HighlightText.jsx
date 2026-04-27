import React from "react";
import "./HighlightText.css";

const HighlightText = ({ text, highlight, color = "primary" }) => {
  if (!highlight || !text) return <span>{text}</span>;

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <span className="highlight-wrapper">
      {parts.map((part, idx) =>
        part && part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={idx} className={`highlight highlight-${color}`}>
            {part}
          </mark>
        ) : (
          <span key={idx}>{part}</span>
        ),
      )}
    </span>
  );
};

export default HighlightText;
