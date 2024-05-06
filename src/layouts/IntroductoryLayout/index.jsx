import React from "react";
//context
import { useGlobalContext } from "@/contexts/GlobalContext";
//comnponentns
import ContinueButton from "@/components/Button/ContinueButton";
import TextButton from "@/components/Button/TextButton";
//css
import styles from "./index.module.scss";

export default function index() {
  const { config,setCurrentWindow } = useGlobalContext();
  const { title, description, buttonText } = config.introductoryWindow;

  return (
    <main className={styles.main}>
      <div>
        <h3 className={styles.preIntro}>{title}</h3>
        <h5 className={styles.preIntro}>{description}</h5>
      </div>
      <div>
        <ContinueButton onClick={()=>setCurrentWindow('quize')} className={styles.preIntro} text={buttonText} />
        {/* <TextButton  className={styles.preIntro} text='Skip' /> */}
      </div>
    </main>
  );
}
