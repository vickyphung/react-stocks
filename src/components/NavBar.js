import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <Link to="/">iStocks</Link>
            <Link to="/stocks">Stocks</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default NavBar;