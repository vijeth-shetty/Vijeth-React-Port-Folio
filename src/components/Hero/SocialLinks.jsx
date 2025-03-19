import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const SocialLinks = ({ links }) => {
    const getIcon = (name) => {
        switch (name.toLowerCase()) {
            case 'linkedin':
                return <FaLinkedin /> ;
            case 'email':
                return <FaEnvelope /> ;
            case 'github':
                return <FaGithub /> ;
            default:
                return null;
        }
    };

    return (
        <div className = "social-links" > {
            links.map((link, index) => (
                <a
                    key = { index }
                    href = { link.url }
                    target = "_blank"
                    rel = "noopener noreferrer"
                    ariaLabel = { link.name }
                >
                    { getIcon(link.name) }
                </a>
            ))
        }
        </div>
    );
};

export default SocialLinks;