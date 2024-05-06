import React from "react";
//css
import styles from "./index.module.scss";

export default function index({
  className,
  onClick,
  text = "Continue",
  isDisabled,
}) {
  return (
    <button
      style={{
        pointerEvents: isDisabled ? "none" : "auto",
        opacity: isDisabled ? 0.5 : 1,
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
