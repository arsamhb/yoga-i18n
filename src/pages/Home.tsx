import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../pages/styles/Home.module.css";
import homeIcon from "../assets/images/icon.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={`${styles.homeBody}`}>
      <div className={styles.bg}></div>
      <Header />
      <h2 className={`${styles.centerWords} ${styles.homeh2}`}>
        <span className={styles["three-words1"]}>{t("pagesHome1")}</span>
        <span className={styles["three-words2"]}>{t("pagesHome2")}</span>
        <span className={styles["three-words3"]}>{t("pagesHome3")}</span>
      </h2>
      <div className={styles.centerBtn}>
        <Link to={"/about"} className={styles.ywm}>
        {t("pagesHome4")}
        </Link>
      </div>
    </div>
  );
}
