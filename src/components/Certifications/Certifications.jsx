import CertificationCard from './CertificationCard';
import { certificatesData } from '../../Data/certifications';

const Certifications = () => {
    return ( <
        section id = "certifications"
        className = "container" >
        <
        h2 > Certifications < /h2> <
        div className = "certificate-grid" > {
            certificatesData.map((certificate) => ( <
                CertificationCard key = { certificate.id }
                certificate = { certificate }
                />
            ))
        } <
        /div> < /
        section >
    );
};

export default Certifications;