import SkillCategory from './SkillCategory';
import { skillsData } from '../../Data/skills';

const Skills = () => {
    return ( <
        section id = "skills"
        className = "container" >
        <
        h2 > Technical Skills < /h2> <
        div className = "skills-container" > {
            Object.entries(skillsData).map(([categoryKey, category]) => ( <
                SkillCategory key = { categoryKey }
                title = { category.title }
                skills = { category.skills }
                />
            ))
        } <
        /div> < /
        section >
    );
};

export default Skills;