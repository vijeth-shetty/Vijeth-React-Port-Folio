// src/components/Certifications/CertificationCard.jsx
const CertificationCard = ({ certificate }) => {
    return ( <
        div className = "certificate-card" >
        <
        div className = "certificate-image" >
        <
        img src = { `${process.env.PUBLIC_URL}${certificate.image}` }
        alt = { certificate.title }
        loading = "lazy" /
        >
        <
        /div> <
        div className = "certificate-content" >
        <
        h3 > { certificate.title } < /h3> <
        p className = "issuer" > { certificate.issuer } < /p>

        {
            certificate.credentialUrl && ( <
                div className = "certificate-actions" >
                <
                a href = { certificate.credentialUrl }
                className = "btn view-btn"
                target = "_blank"
                rel = "noopener noreferrer" >
                View Credential <
                /a> <
                /div>
            )
        } <
        /div> <
        /div>
    );
};

export default CertificationCard;