import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');
    };

    return ( <
        button className = "theme-toggle"
        onClick = { toggleTheme }
        ariaLabel = "Toggle theme" > { isDarkTheme ? < FaMoon / > : < FaSun / > } <
        /button>
    );
};

export default ThemeToggle;