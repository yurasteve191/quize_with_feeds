import React from 'react';
//css
import styles from './index.module.scss';

export default function CheckBox({ isChecked }) {
  return (
    <div className={`${styles.checkBox} ${isChecked && styles.checked}`}>
      {isChecked && <div className={`${styles.innerDiv} ${isChecked && styles.checked}`}></div>}
    </div>
  );
}