import React from "react";
import styles from "./Marquee.module.css";

const items = ["AI-Powered Learning","Critical Thinking","No Coding Needed","Problem Solving","Certificate Included","Limited Seats","Hands-On Activities","Future-Ready Skills"];
const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className={styles.wrapper}>
      <div className={`marquee-track ${styles.track}`}>
        {doubled.map((t, i) => (
          <span key={i} className={styles.item}>
            <i className={`fa-solid fa-star ${styles.star}`} /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
