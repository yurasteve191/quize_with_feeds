import React, { useState } from "react";
//components
import CheckBox from "@/components/CheckBox";

//css
import styles from "./index.module.scss";

export default function index({onClick, answer="Answer", style}) {
    const [isChecked, setIsChecked] = useState(false);

const handleClicl = () => {
    setIsChecked(!isChecked)
    onClick()
}

  return (
    <button onClick={handleClicl} className={`${styles.button} ${isChecked && styles.checked}`} style={style}>
      <CheckBox isChecked={isChecked} />
      <span>{answer}</span>
    </button>
  );
}
