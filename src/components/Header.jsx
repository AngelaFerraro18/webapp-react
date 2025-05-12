import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="p-4 bg-info mb-4">
                <div className="container text-center">
                    <Link className="fs-3 text-decoration-none text-white fw-bold" to={'/movies'}>Movies</Link>
                </div>
            </header>
        </>
    )
}

export default Header;