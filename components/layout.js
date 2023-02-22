import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
export default function Layout({ children, navbar_text }) {
    return (
        <div className="main-layout" style={{position: "relative", minHeight: "100vh"}}>
            <Navbar navbar_text={navbar_text}/>
                <main>{children}</main>
            <Footer/>
        </div>
    );
}
