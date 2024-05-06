import React, { createContext, useContext, useState, useEffect } from "react";
//utils
import { fetchConfig, calculateStartWindow } from "@/utils/config";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentWindow, setCurrentWindow] = useState("loading");
  const [nextWindow, setNextWindow] = useState("");
  const [currentQuizeId, setCurrentQuizeId] = useState(0);
  const [config, setConfig] = useState({});

  const handleNextQuize = () => {
    setTimeout(() => {
      if(currentQuizeId < (config.quize.questions.length-1)){
        setCurrentQuizeId((prev) => prev + 1);
      }else{
        setCurrentWindow('loading');
        setNextWindow('rollette');
      }
    }, 100);
  }
  const generateLink = (url) => {
    const params = new URLSearchParams(window.location.search);
    return `${url}?${params.toString()}`;
  }
  useEffect(() => {
    fetchConfig()
      .then((data) => {
        setConfig(data);
        return data;
      })
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        config,
        currentWindow,
        nextWindow,
        currentQuizeId,
        setCurrentWindow,
        setNextWindow,
        handleNextQuize,
        setCurrentQuizeId,
        generateLink
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Хук для використання контексту
export const useGlobalContext = () => useContext(GlobalContext);
