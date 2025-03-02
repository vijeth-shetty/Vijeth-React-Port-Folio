const AboutImage = ({ src, alt }) => {
    return ( <
        div className = "about-image" >
        <
        img src = { `${process.env.PUBLIC_URL}/${src}` }
        alt = { alt }
        loading = "lazy" /
        >
        <
        /div>
    );
};

AboutImage.defaultProps = {
    src: "Resources/Photos/default-profile.png",
    alt: "Profile Picture"
};

export default AboutImage;