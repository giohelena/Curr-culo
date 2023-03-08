import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiWordpress,
    DiGit
} from 'react-icons/di';

import "../styles/components/technologies-container.sass"

const technologies = [
    { id: "html", name: "HTML5", icon:<DiHtml5 />, description: "Conhecimento sobre as tags e HTML semântico"},
    { id: "css", name: "CSS3", icon:<DiCss3 />, description: "Bons conhecimentos em CSS, Sass, Grids e Flexbox."},
    { id: "js", name: "JavaScript", icon:<DiJsBadge />, description: "Bons conhecimentos em JavaScript Sincrono e Assíncrono, com alguns projetos elaborados"},
    { id: "node", name: "Node.js", icon:<DiNodejsSmall />, description: "Possuo projetos desenvolvidos com NodeJs"},
    { id: "mysql", name: "MySQL", icon:<DiMysql />, description: "Formação complementar através do 'Curso em Video', com certificação"} ,
    { id: "react", name: "React", icon:<DiReact />, description: "React Hooks e React Router"},
    { id: "wordpress", name: "WordPress", icon:<DiWordpress />, description: "Conhecimentos básicos em WordPress, com alguns projetos elaborados"},
    { id: "git", name: "Git", icon:<DiGit />, description: "Git e Github como ferramentas de armazenamento e registro de edições"}

];

const TechnologiesContainer = () => {
    return (
    <section className='technologies-container'>
        <j2>Tecnologias</j2>
        <div className='technologies-flex'>
            {technologies.map((tech) => (
                <div className='technology-card' id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='technologie-info'>
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>

    )
};

export default TechnologiesContainer;