import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({
  current,
  total,
  showPercentage = true,
  showLabel = true,
}) => {
  const percentage = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ width: `${percentage}%` }} />
      </div>
      {showLabel && (
        <span className="progress-label">
          {current} de {total}{" "}
          {showPercentage && `(${Math.round(percentage)}%)`}
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
