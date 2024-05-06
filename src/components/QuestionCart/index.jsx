import React from 'react'
//css
import styles from './index.module.scss';

export default function index({question='default question'}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>{question}</h2>
    </div>
  )
}
