import React from "react";
import "./Table.css";

const Table = ({ headers, rows, variant = "striped", caption = null }) => {
  return (
    <div className="table-wrapper">
      <table className={`table table-${variant}`}>
        {caption && <caption className="table-caption">{caption}</caption>}
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
