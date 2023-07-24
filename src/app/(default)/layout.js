
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


export default function DefaultLayout({ children }) {

    return (
        <>
            <Navbar />
            <div className="container" >
                <div style={{ marginTop: 120 }}>
                    {children}
                </div>
            </div>

            <Footer />
        </>
    );

}
