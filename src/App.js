import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";

import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        Hero / >
        <
        About / >
        <
        Education / >
        <
        Skills / >
        <
        Projects / >
        <
        Certifications / >
        <
        /div>
    );
}

export default App;