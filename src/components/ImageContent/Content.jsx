import styles from "./content.module.css";


const bgImages = [
    //images.unsplash.com/photo-1554585343-acd99e31977b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
];

const randomNum = () => Math.floor(Math.random() * bgImages.length);

export const Content = () => {


    return (
        <>
            <div className={styles.contentContainer}>
                <div
                    className={styles.bgImage}
                    style={{ backgroundImage: `url(${bgImages[randomNum()]})` }}
                ></div>

                <div className={styles.textWrapper}>
                    <div className={styles.heading}>
                        Tüzün Hukuk Bürosu
                    </div>
                    <div className={styles.label}>Avukatlık mesleği
                        akıl, bilim ve bilgi ışığında, değişen zaman koşullarına
                        göre güncellenen hukuk normlarının takibi ile etkin
                        şekilde yapılmaktadır</div>

                    <a
                        href="https://blog-gray-zeta.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={styles.more}>Read more</div>
                    </a>
                </div>
            </div>
        </>
    );
};
