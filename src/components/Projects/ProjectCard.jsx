const ProjectCard = ({ project }) => {
    return (
        < div className = "project-card" >
            <div className = "project-media" >
                <video
                    src = { `${process.env.PUBLIC_URL}${project.media}` }
                    autoPlay loop muted playsInline
                    ariaLabel = { `Demo of ${project.title}` }
                />
            < /div >
            <div className = "project-content" >
                <h3 > { project.title } < /h3>
                <h4 > { project.subtitle } < /h4>
                <p > { project.description } < /p>
                <div className = "tech-stack" > {
                    project.techStack.map((tech) => (
                        <span
                            key = { tech }
                            className = "tech-tag" >
                            { tech }
                        < /span>
                    ))
                }
                </div>
                <div className = "project-links" >
                    <a
                        href = { project.demoUrl }
                        className = "btn"
                        target = "_blank"
                        rel = "noopener noreferrer"
                    >
                        Live Demo
                    </a>
                    <a
                        href = { project.codeUrl }
                        className = "btn"
                        target = "_blank"
                        rel = "noopener noreferrer"
                    >
                        View Code
                    </a>
                < /div >
            </div>
        < /div >
    );
};

export default ProjectCard;