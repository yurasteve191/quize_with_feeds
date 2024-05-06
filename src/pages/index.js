"use client";
import Head from "next/head";
//contexts
import { GlobalProvider, useGlobalContext } from "@/contexts/GlobalContext";
import { QuestionProvider } from "@/contexts/QuestionContext";
//text components
import QuestionCart from "@/components/QuestionCart";
import QuestionProgressLine from "@/components/QuestionProgressLine";
import AnswerButton from "@/components/Button/AnswerButton";
import ContinueButton from "@/components/Button/ContinueButton";
//layouts
import LoadingLayout from "@/layouts/LoadingLayout";
import IntroductoryLayout from "@/layouts/IntroductoryLayout";
import QuizeLayout from "@/layouts/QuizeLayout";
import FeedsLayout from "@/layouts/FeedsLayout";
import RolletteLayout from "@/layouts/RolletteLayout";

const Inner = () => {
  const { currentWindow, config } = useGlobalContext();
  return (
    <>
      {currentWindow === "loading" && <LoadingLayout />}
      {currentWindow === "introductory" && <IntroductoryLayout />}
      {currentWindow === "feeds" && <FeedsLayout />}
      {currentWindow === "rollette" && <RolletteLayout />}
      {currentWindow === "quize" && (
        <QuestionProvider>
          <QuizeLayout />
        </QuestionProvider>
      )}
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          height: "50px",
        }}
      >
        <a
          href='https://lnktracker.com/DpDNPM'
          style={{ color: "white", textDecoration: "none" }}
        >
          Privacy Policy
        </a>
        <a
          href='https://lnktracker.com/TxcpRq'
          style={{ color: "white", textDecoration: "none" }}
        >
          Terms & Conditions
        </a>
      </footer>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Ask and Win!</title>
        <meta
          name='description'
          content='Join our quiz, ask questions, and win prizes!'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalProvider>
        <Inner />
      </GlobalProvider>
    </>
  );
}
