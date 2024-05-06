import React from "react";
//components
import QuestionCart from "@/components/QuestionCart";
import QuestionProgressLine from "@/components/QuestionProgressLine";
import AnswerButton from "@/components/Button/AnswerButton";
import ContinueButton from "@/components/Button/ContinueButton";
//layouts
import FeedsLayout from "@/layouts/FeedsLayout";
//context
import { useGlobalContext } from "@/contexts/GlobalContext";
//css
import styles from "./index.module.scss";

export default function index() {
  const { config, currentQuizeId, handleNextQuize } = useGlobalContext();
  const { quize, feeds } = config;
  console.log(quize);

  return (
    <>
      <main className={styles.main}>
        <QuestionProgressLine />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <QuestionCart question={quize.questions[currentQuizeId].question} />

          {quize.questions[currentQuizeId].answers.map((answer, index) => {
            return (
              <AnswerButton
                key={index+currentQuizeId+answer}
                onClick={handleNextQuize}
                answer={answer}
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            );
          })}
        </div>
      </main>
      {feeds.isActiveOnQuizePage && <FeedsLayout />}
    </>
  );
}
