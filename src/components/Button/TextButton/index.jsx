import React from 'react'
//css
import styles from './index.module.scss'

export default function index({className='', onClick,text='Text button'}) {
  return (
  <button className={`${styles.button} ${className}`} onClick={onClick}>
    {text}
  </button>
  )
}
