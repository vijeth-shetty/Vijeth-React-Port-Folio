import ProjectCard from './ProjectCard';
import { projectsData } from '../../Data/projects';

const Projects = () => {
    return (
        <section id = "projects" className = "container" >
            <h2 > Projects < /h2>
            <div className = "project-grid" > {
                projectsData.map((project) => (
                    <ProjectCard
                        key = { project.id }
                        project = { project }
                    />
                ))
            }
            </div>
        < /section >
    );
};

export default Projects;