import React from "react";
//conpinents
import { IoBookmark } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
//context
import { useGlobalContext } from "../../../contexts/GlobalContext";
//css
import styles from "./index.module.scss";

export default function index({style, feed}) {
  const { generateLink } = useGlobalContext();

  return (
    <button onClick={()=>window.location.href = generateLink(feed.url)} className={`${styles.button}`} style={style}>
      <div>
      <IoBookmark className={styles.icon}/>
      <span>{feed.title}</span>
      </div>
      <FaArrowAltCircleRight className={styles.icon}/>
    </button>
  );
}
