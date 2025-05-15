import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext);

    return (
        <>
            <Header />
            {isLoading && <Loader />}
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout;