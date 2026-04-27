import React from "react";
import "./ComparisonCard.css";

const ComparisonCard = ({
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
  leftBadge = "MALO",
  rightBadge = "BUENO",
}) => {
  return (
    <div className="comparison-container">
      <div className="comparison-left">
        <div className="comparison-badge bad">{leftBadge}</div>
        <div className="comparison-title">{leftTitle}</div>
        <div className="comparison-content">{leftContent}</div>
      </div>
      <div className="comparison-vs">VS</div>
      <div className="comparison-right">
        <div className="comparison-badge good">{rightBadge}</div>
        <div className="comparison-title">{rightTitle}</div>
        <div className="comparison-content">{rightContent}</div>
      </div>
    </div>
  );
};

export default ComparisonCard;
