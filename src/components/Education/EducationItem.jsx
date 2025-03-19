import { FaUniversity, FaCalendarAlt, FaPercentage } from 'react-icons/fa';

const EducationItem = ({ education }) => {
    return (
        <div className = "education-item" >
            <div className = "edu-left" >
                <h3 className = "edu-course" > { education.course } < /h3>
                <p className = "edu-college" > { education.college } < /p>
            </div>
            <div className = "edu-right" >
                <ul className = "edu-details" >
                    <li >
                        <FaUniversity className = "edu-icon" />
                        { education.university }
                    </li>
                    <li >
                        <FaCalendarAlt className = "edu-icon" />
                        { education.year }
                    </li>
                    <li >
                        <FaPercentage className = "edu-icon" />
                        { education.percentage }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EducationItem;