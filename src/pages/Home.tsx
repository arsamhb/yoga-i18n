import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../pages/styles/Home.module.css";
import homeIcon from "../assets/images/icon.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={`${styles.homeBody}`}>
      <div className={styles.bg}></div>
      <Header />
      <h2 className={`${styles.centerWords} ${styles.homeh2}`}>
        <span className={styles["three-words1"]}>برخیز</span>
        <span className={styles["three-words2"]}>و</span>
        <span className={styles["three-words3"]}>بدرخش</span>
      </h2>
      <div className={styles.centerBtn}>
        <Link to={"/about"} className={styles.ywm}>
          شروع کنید
        </Link>
      </div>
    </div>
  );

}
