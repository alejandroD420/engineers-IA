import React from "react";
import "./Grid.css";

const Grid = ({ children, columns = 2, gap = "medium", className = "" }) => {
  return (
    <div className={`grid grid-${columns} grid-gap-${gap} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
