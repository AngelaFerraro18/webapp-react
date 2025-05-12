import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout;