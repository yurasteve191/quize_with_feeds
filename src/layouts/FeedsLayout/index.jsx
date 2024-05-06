import React from "react";
//context
import { useGlobalContext } from "@/contexts/GlobalContext";
//components
import FeedButton from "@/components/Button/FeedButton";
import TextButton from "@/components/Button/TextButton";
//css
import styles from "./index.module.scss";

export default function index() {
  const { config, nextWindow,generateLink } = useGlobalContext();
  const { feeds } = config;

  return (
    <section
      style={{
        height: nextWindow === "feeds" ? "100vh" : "auto",
        justifyContent: nextWindow === "feeds" ? "center" : "flex-start",
      }}
      className={styles.section}
    >
      <h3>{feeds.title}</h3>
      {feeds.list.map((feed, index) => {
        return (
          <FeedButton
            key={index}
            feed={feed}
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        );
      })}
      {nextWindow === "feeds" && (
        <TextButton
          text={config.close.title}
          onClick={() => (window.location.href = generateLink(config.close.url))}
        />
      )}
    </section>
  );
}
