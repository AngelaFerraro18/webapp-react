import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Link to={'/movies'}>Movies</Link>
        </>
    )
}

export default Header;