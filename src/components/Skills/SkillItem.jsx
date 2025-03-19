const SkillItem = ({ icon: Icon, name }) => {
    return (
        <div className = "skill-item" >
            <div className = "skill-icon" >
                <Icon ariaHidden = "true" />
            </div>
            <span className = "skill-name" > { name } < /span>
        < /div >
    );
};

export default SkillItem;