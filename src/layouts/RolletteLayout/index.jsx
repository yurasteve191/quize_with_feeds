import React, { useState } from "react";
//context
import { useGlobalContext } from "@/contexts/GlobalContext";
//components
import RoulettePro from "react-roulette-pro";
import ContinueButton from "@/components/button/ContinueButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Confetti from "react-confetti";
//css
import "react-roulette-pro/dist/index.css";
import styles from "./index.module.scss";

export default function index() {
  const { config, generateLink } = useGlobalContext();
  const { rollette } = config;
  const [start, setStart] = useState(false);
  const [win, setWin] = useState(false);

  const prizes = rollette.itemsImages;
  const prizeIndex = prizes.length * 4 + rollette.winIntex;

  const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
      .fill("_")
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];
  const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
  ];
  const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;
  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id:
      typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : generateId(),
  }));

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };
  const handlePrizeDefined = () => {
    setWin(true);
  };

  return (
    <main className={styles.main}>
      <h3>{rollette.title}</h3>
      <div className={styles.rowContainer}>
        <IoIosArrowForward className={styles.icon} />
        <RoulettePro
          prizes={prizeList}
          prizeIndex={prizeIndex}
          start={start}
          type='vertical'
          onPrizeDefined={handlePrizeDefined}
        />
        <IoIosArrowBack className={styles.icon} />
      </div>
      <ContinueButton
        onClick={handleStart}
        text={rollette.buttonText}
        isDisabled={start}
      />
      {win && (
        <div className={styles.confettiContainer}>
          <Confetti width='400' height='1000' />
          <h2>{rollette.winText}</h2>
          <img
            style={{ height: "200px" }}
            src={rollette.itemsImages[rollette.winIntex].image}
            alt='winImage'
          />
          <ContinueButton
            onClick={() => window.location.href = generateLink(rollette.winButtonUrl)}
            text={rollette.winButtonText}
          />
        </div>
      )}
    </main>
  );
}
