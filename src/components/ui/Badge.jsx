import React from "react";
import "./Badge.css";

const Badge = ({ text, variant = "info", size = "medium" }) => {
  return <span className={`badge badge-${variant} badge-${size}`}>{text}</span>;
};

export default Badge;
