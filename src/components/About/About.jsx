import AboutImage from './AboutImage';
import { aboutContent } from '../../Data/about';

const About = () => {
    return (
        <section id = "about" className = "container" >
            <h2 > About Me < /h2>
            <div className = "about-container" >
                <AboutImage src = "Resources/Photos/Vijeth.png" alt = "Vijeth Shetty" />
                <div className = "about-content" > {
                    aboutContent.map((paragraph, index) => (
                        <p key = { index } > {
                            paragraph.map((part, i) =>
                                (part.highlight ? ( <span key = { i } > { part.text } < /span>) : (part.text)
                                )
                            )
                        }
                        </p>
                    ))
                }
                </div>
            < /div >
        </section>
    );
};

export default About;