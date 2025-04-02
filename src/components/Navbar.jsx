import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">NC News API Docs</h1>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/api">API Reference</Link>
            </div>
        </nav>
    );
};

export default Navbar;

