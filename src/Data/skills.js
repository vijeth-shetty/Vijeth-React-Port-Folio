import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaJava,
    FaNodeJs,
    FaNpm,
    FaGithub,
    FaGitAlt
} from 'react-icons/fa';
import { SiExpress, SiEjs, SiPostgresql, SiMysql, SiIntellijidea, SiJavascript, SiHibernate, SiOracle, SiApachemaven } from 'react-icons/si';
import { DiEclipse } from 'react-icons/di';
import { TbBrandVscode } from "react-icons/tb";

export const skillsData = {
    language: {
        title: 'Programming & Scripting Languages',
        skills: [
            { icon: FaJava, name: 'Java' },
            { icon: FaJava, name: 'Adv-Java' },
            { icon: SiJavascript, name: 'JavaScript' },
        ]
    },
    frontend: {
        title: 'Frontend Development ',
        skills: [
            { icon: FaHtml5, name: 'HTML5' },
            { icon: FaCss3Alt, name: 'CSS3' },
            { icon: FaBootstrap, name: 'Bootstrap' },
            { icon: FaReact, name: 'React JS' },
            { icon: SiEjs, name: 'EJS' }
        ]
    },
    backend: {
        title: 'Backend Development',
        skills: [
            { icon: SiHibernate, name: 'Hibernate' },
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: SiExpress, name: 'Express.js' },
        ]
    },
    database: {
        title: 'Databases & SQL',
        skills: [
            { icon: SiOracle, name: 'Oracle SQL' },
            { icon: SiMysql, name: 'MySQL' },
            { icon: SiPostgresql, name: 'PostgreSQL' }
        ]
    },
    codeEditor: {
        title: 'Development Tools & IDEs',
        skills: [
            { icon: TbBrandVscode, name: 'VS Code' },
            { icon: DiEclipse, name: 'Eclipse' },
            { icon: SiIntellijidea, name: 'Intellij IDEA' },
        ]
    },
    tools: {
        title: 'Version Control & Package Management',
        skills: [
            { icon: FaGitAlt, name: 'Git' },
            { icon: FaGithub, name: 'GitHub' },
            { icon: FaNpm, name: 'npm' },
            { icon: SiApachemaven, name: 'Apache Maven' },
        ]
    }
};