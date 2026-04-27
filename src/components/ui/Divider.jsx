import React from "react";
import "./Divider.css";

const Divider = ({ text, variant = "light", spacing = "medium" }) => {
  if (text) {
    return (
      <div
        className={`divider divider-text divider-${variant} divider-spacing-${spacing}`}
      >
        <span className="divider-line" />
        <span className="divider-content">{text}</span>
        <span className="divider-line" />
      </div>
    );
  }

  return (
    <hr className={`divider divider-${variant} divider-spacing-${spacing}`} />
  );
};

export default Divider;
