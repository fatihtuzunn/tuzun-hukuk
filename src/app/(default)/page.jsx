import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Judge from "public/judge.svg"
import Button from "@/components/Button/Button";
import { Content } from "@/components/ImageContent/Content";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Content />
      <div className={styles.container} style={{ marginTop: 180 }}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Hukukun Her Alanında Hizmet
          </h1>
          <p className={styles.desc}>
            Türkiye’nin gelişen ve dünyaya entegre olan ekonomisi ve bu kapsamda çeşitlenen hizmet taleplerine cevap verebilmek amacı ile Aksan bünyesinde, konusunda uzman avukatlardan oluşan departmanlar bulunmaktadır.
          </p>
          <Button url="/blog" text="Yazılara ulaş" />
        </div>
        <div className={styles.item}>
          <Image src={Judge} alt="" className={styles.img} />
        </div>
      </div>

      <Services />

    </>
  );
}
