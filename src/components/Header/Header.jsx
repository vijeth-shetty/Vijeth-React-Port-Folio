import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header >
            <nav className = "container" >
                <div >
                    <a href = "#hero" > Vijeth < /a>
                    {" "}
                </div>{" "}
                <NavLinks isMenuOpen = { isMenuOpen } />{" "}
                <div >
                    <ThemeToggle />
                    <FaBars
                        className = "menu-icon"
                        onClick = {() => setIsMenuOpen(!isMenuOpen) }
                    />{" "}
                </div>{" "}
            </nav>{" "}
        </header>
    );
};

export default Header;