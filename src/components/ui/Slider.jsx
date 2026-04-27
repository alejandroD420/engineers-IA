import React from "react";
import "./Slider.css";

const Slider = ({
  min,
  max,
  value,
  onChange,
  label,
  showValue = true,
  step = 0.01,
  disabled = false,
}) => {
  return (
    <div className="slider-container">
      {label && <label className="slider-label">{label}</label>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="slider"
        disabled={disabled}
      />
      {showValue && <span className="slider-value">{value}</span>}
    </div>
  );
};

export default Slider;
