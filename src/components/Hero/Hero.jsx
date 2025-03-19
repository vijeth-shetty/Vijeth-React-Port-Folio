import SocialLinks from './SocialLinks';
import { heroContent } from '../../Data/hero';


const Hero = () => {
    return (
        <section id = "hero" >
            <div className = "container" >
                <h1 > { heroContent.title } < /h1>
                <p > { heroContent.subtitle } < /p>
                <div className = "cta-buttons" > {
                    heroContent.buttons.map((button, index) => (
                        <a
                            key = { index }
                            href = { button.url }
                            className = "btn"
                            download = { button.download }
                            target = { button.external ? "_blank" : undefined }
                            rel = { button.external ? "noopener noreferrer" : undefined }
                        >
                            { button.text }
                        </a>
                    ))
                }
                </div>
                <SocialLinks links = { heroContent.socialLinks }/>
            < /div >
        </section>
    );
};

export default Hero;