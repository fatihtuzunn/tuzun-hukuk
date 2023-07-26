import React from "react";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";



const getData = () => {
  const data = items;

  if (data) {
    return data;
  }

  return notFound();
};

const Category = () => {
  const data = getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>wew</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button />
          </div>

          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
