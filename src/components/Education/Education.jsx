import EducationItem from './EducationItem';
import { educationData } from '../../Data/education';

const Education = () => {
    return (
        <section id = "education" className = "container" >
            <h2 > Education < /h2>
            <div className = "education-container" > {
                educationData.map((education) => (
                    <EducationItem
                        key = { education.id }
                        education = { education }
                    />
                ))
            }
            </div>
        </section >
    );
};

export default Education;