import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaJava,
    FaNodeJs,
    FaDatabase,
    FaNpm,
    FaGithub,
    FaGitAlt
} from 'react-icons/fa';
import { SiExpress, SiEjs, SiPostgresql, SiMysql, SiIntellijidea, SiJavascript } from 'react-icons/si';
import { DiEclipse } from 'react-icons/di';
import { TbBrandVscode } from "react-icons/tb";

export const skillsData = {
    frontend: {
        title: 'Frontend',
        skills: [
            { icon: FaHtml5, name: 'HTML5' },
            { icon: FaCss3Alt, name: 'CSS3' },
            { icon: SiJavascript, name: 'JavaScript' },
            { icon: FaBootstrap, name: 'Bootstrap' },
            { icon: FaReact, name: 'React JS' }
        ]
    },
    backend: {
        title: 'Backend',
        skills: [
            { icon: FaJava, name: 'Java' },
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: SiExpress, name: 'Express.js' },
            { icon: SiEjs, name: 'EJS' }
        ]
    },
    codeEditor: {
        title: 'Code Editor Tools',
        skills: [
            { icon: TbBrandVscode, name: 'VS Code' },
            { icon: DiEclipse, name: 'Eclipse' },
            { icon: SiIntellijidea, name: 'Intellij' },
        ]
    },
    database: {
        title: 'Database',
        skills: [
            { icon: FaDatabase, name: 'SQL' },
            { icon: SiMysql, name: 'MySQL' },
            { icon: SiPostgresql, name: 'PostgreSQL' }
        ]
    },
    tools: {
        title: 'Tools & Controls',
        skills: [
            { icon: FaNpm, name: 'npm' },
            { icon: FaGithub, name: 'GitHub' },
            { icon: FaGitAlt, name: 'Git' },
        ]
    }
};