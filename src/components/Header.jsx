import { useState } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.setAttribute("data-theme", isDarkTheme ? "light" : "dark");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return ( <
        header >
        <
        nav className = "container" >
        <
        div >
        <
        a href = "#hero" > Vijeth < /a>{" "} < /
        div > { " " } <
        div className = { `nav-links ${isMenuOpen ? "active" : ""}` } >
        <
        a href = "#about" > About < /a> <a href="#education"> Education </a > { " " } <
        a href = "#skills" > Skills < /a> <a href="#projects"> Projects </a > { " " } <
        a href = "#certifications" > Certifications < /a>{" "} <
        a href = "#contact" > Contact < /a>{" "} < /
        div > { " " } <
        div >
        <
        button className = "theme-toggle"
        onClick = { toggleTheme } > { " " } { isDarkTheme ? < FaMoon / > : < FaSun / > } { " " } <
        /button>{" "} <
        FaBars className = "menu-icon"
        onClick = { toggleMenu }
        />{" "} < /
        div > { " " } <
        /nav>{" "} < /
        header >
    );
};

export default Header;