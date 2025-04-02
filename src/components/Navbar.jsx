import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>NC News API Docs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/reference">API Reference</Link>
                <a
                    href="https://fabulous-choux-6677f0.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                >
                    Live Site
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
