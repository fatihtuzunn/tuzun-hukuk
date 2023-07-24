
import styles from "./footer.module.css";
/* import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;
 */

import { Stack } from "@mui/material";
import { SocialIcons } from "./SocialIcons";

const FooterList = ({ linkList, align }) => {
  return (
    <div className={styles.footerList}>
      {linkList.map((item, index) => (
        <div key={index} style={{ marginBottom: 10, textAlign: align }}>
          {item}
        </div>
      ))}
    </div>
  );
};

const linkList = [
  "Orders & Support",
  "Shipping & Returns",
  "Privacy",
  "Terms",
  "",
  "Social",
  "Instagram",
  "Pinterest"
];
const linkList2 = [
  "Site",
  "Shop",
  "Journal",
  "Workshops",
  "About",
  "Stockists",
  "Collaborations",
  "Contact"
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerGrid}>
        <div style={{ width: "100%" }}>
          <div style={{ color: "#dddbd7" }}>Newsletter</div>
          <input placeholder="email address" />
        </div>
        <div>dsaads</div>
        <div />
        <SocialIcons />
        <FooterList linkList={linkList2} align={"left"} />
        {/* <FooterList linkList={linkList} align={"left"} /> */}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          color: "#dddbd7"
        }}
      >
        <div>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "rgba(255,255,255,0.2)" }}>Nonoumasy</span>
        </div>
        <div />
      </div>
    </div>
  );
};


export default Footer;