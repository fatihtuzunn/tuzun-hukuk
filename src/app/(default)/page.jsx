import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Judge from "public/judge.svg"
import { Content } from "@/components/ImageContent/Content";
import Services from "@/components/Services/Services";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Content />

      <div className={styles.container} style={{ marginTop: 180, flexDirection: "column" }}>
        <div >
          <h1 style={{ textAlign: "center" }}>Hakkımızda</h1>
          <p className={styles.contactDesc}>Altınkaya Hukuk ve Danışmanlık Bürosu hukukun üstünlüğü ilkesini amaç edinmiş, ahlak  ve avukatlık mesleğininin etik kurallarına saygılı Türk ve Yabancı müvekkillerine özel hukuk danışmanlık ve avukatlık hizmeti vermektedir. Evrensel hukuk normları ve kalite prensipleri çerçevesinde müvekkillerinin hukuki taleplerini güvenilir, etkin çözüme ulaştırmak önceliğimizdir.</p>
        </div>
      </div>


      <div className={styles.container} style={{ marginTop: 180 }}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Yardıma ihtiyacınız var mı ?
          </h1>
          <p className={styles.desc}>
            Türkiye’nin gelişen ve dünyaya entegre olan ekonomisi ve bu kapsamda çeşitlenen hizmet taleplerine cevap verebilmek amacı ile Aksan bünyesinde, konusunda uzman avukatlardan oluşan departmanlar bulunmaktadır.
          </p>
          <Button size="large" style={{ textTransform: "none" }}
            variant="contained">İletişime geç</Button>
        </div>
        <div className={styles.item}>
          <Image src={Judge} alt="" className={styles.img} />
        </div>
      </div>

      <Services />

    </>
  );
}
