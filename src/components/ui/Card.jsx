import React from "react";
import "./Card.css";

const Card = ({
  title,
  children,
  icon = null,
  variant = "default",
  onClick = null,
  footer = null,
}) => {
  const isClickable = onClick !== null;

  return (
    <div
      className={`card card-${variant} ${isClickable ? "card-clickable" : ""}`}
      onClick={isClickable ? onClick : undefined}
    >
      {title && (
        <div className="card-header">
          {icon && <span className="card-icon">{icon}</span>}
          <h3 className="card-title">{title}</h3>
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
