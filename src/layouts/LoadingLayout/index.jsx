import React, { useEffect } from 'react'
//context
import { useGlobalContext } from "@/contexts/GlobalContext";
//components
import LoadingIcon from "@/components/LoadingIcon";
//css
import styles from "./index.module.scss";
//utils
import { calculateStartWindow } from '@/utils/config';

export default function index() {
  const { config, nextWindow, setCurrentWindow } = useGlobalContext();

  const setNextWindow = () => {
    if(Object.keys(config).length === 0){
      return;
    }
    setTimeout(() => {
      setCurrentWindow(!nextWindow ? calculateStartWindow(config) : nextWindow);
    }, 1000);
  }

  useEffect(() => {
    setNextWindow();
  }, [config])

  return (
    <main className={styles.main}>
      <LoadingIcon/>
    </main>
  )
}
