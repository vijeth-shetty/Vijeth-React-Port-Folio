import SkillItem from './SkillItem';

const SkillCategory = ({ title, skills }) => {
    return (
        <div className = "skill-category" >
            <h3 > { title } < /h3>
            <div className = "skills-grid" > {
                skills.map((skill, index) => (
                    <SkillItem
                        key = { index }
                        icon = { skill.icon }
                        name = { skill.name }
                    />
                ))
            }
            </div>
        </div>
    );
};

export default SkillCategory;