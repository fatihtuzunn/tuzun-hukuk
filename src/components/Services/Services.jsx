"use client"

import { ThemeContext } from "@/context/ThemeContext";
import styles from "./services.module.css"
import React, { useContext } from "react";
import { Divider } from "@mui/material";



const Services = () => {
    const { mode } = useContext(ThemeContext);
    const workInfoData = [
        {
            image: "",
            title: "TEKNOLOJİ HUKUKU",
            text:
                "Tuzun Hukuk,e-ticaret, siber güvenlik, nesnelerin interneti ve yapay zeka alanlarındaki faaliyetlerinde ve yazılım geliştirme ve mobil uygulama sözleşmeleri, know-how sözleşmeleri, lisans sözleşmeleri dahil olmak üzere her çeşit teknik bilgi gerektiren sözleşmenin hazırlanmasında danışmalık vermektedir."
        },
        {
            image: "",
            title: "CEZA HUKUKU",
            text:
                "Ceza hukuku ve ceza davaların ilişkin her türlü avukatlık hizmetlerinde uzman kadromuz ile yanınızdayız."
        },
        {
            image: "",
            title: "AİLE HUKUKU",
            text:
                "Or Hukuk ve Danışmanlık Ofisi boşanma davalarında sadece bu konuda uzman avukatlarca hizmet vermektedir."
        },
        {
            image: "",
            title: "GÖÇMENLİK HUKUKU",
            text:
                "If you are accepted, you will receive an offer to join our program. Simply accept the offer and fill the enrollment form."
        },
        {
            image: "",
            title: "Learn",
            text:
                "Our 12-week program is intensive and hands-on. You will learn to code and develop real-world projects."
        },
        {
            image: "",
            title: "Job Placement",
            text:
                "We work with our hiring partners to help you find a job in tech after you graduate."
        }
    ];
    return (
        <div className={`${mode} ${styles.wrapper}`}>
            <div className={styles.top}>
                <p className={styles.subheading}>Work</p>
                <h1 className={styles.heading}>How It Works</h1>
                <p className="text">
                    At CodeCamp, we believe that anyone can learn to code and start a
                    career in tech, regardless of their background or previous experience.
                    Our program is designed to be accessible to everyone, and we welcome
                    students from all walks of life.
                </p>
                <h1 className={styles.heading} style={{ marginTop: 50, marginBottom: -10 }}>UZMANLIK ALANLARI </h1>            </div>
            <div className={styles.bottom}>
                {workInfoData.map((data) => (
                    <div className={styles.info} key={data.title}>
                        <div className="info-boxes-img-container">
                            {data.image}
                            {/* <img src={data.image} alt="" /> */}
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
