import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/araclar/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/araclar/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/araclar/applications" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
        <Link href="/araclar/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/araclar/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/araclar/applications" style={{ background: 'url("/illustration.png")' }} className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
