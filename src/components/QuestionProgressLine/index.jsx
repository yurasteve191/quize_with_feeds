import React from "react";
//contexts
import { useQuestionContext } from "@/contexts/QuestionContext";
import { useGlobalContext } from "@/contexts/GlobalContext";
//componetns
import { IoMdClose, IoMdArrowBack } from "react-icons/io";
//css
import styles from "./index.module.scss";

export default function index() {
  const { progress } = useQuestionContext();
  const { config, setCurrentWindow, currentQuizeId, setCurrentQuizeId, setNextWindow } =
    useGlobalContext();

    const calculateProgress = () => {
        return ((currentQuizeId+1) / config.quize.questions.length) * 100
    }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        {currentQuizeId > 0 ? (
          <button onClick={()=>{setCurrentQuizeId(currentQuizeId-1)}} className={styles.button}>
            <IoMdArrowBack />
          </button>
        ) : <div></div>}
        <h3 className={styles.headerText}>
          Question {currentQuizeId + 1}/{config.quize.questions.length}
        </h3>
        <button
          className={styles.button}
          onClick={() => {
            setCurrentWindow("loading");
            setNextWindow("feeds");
          }}
        >
          <IoMdClose />
        </button>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line} style={{ width: `${calculateProgress()}%` }}></div>
      </div>
    </div>
  );
}
