import styles from './ProjectsStyles.module.css';
import Blog from '../../assets/The Blog.png';
import SoshMe from '../../assets/sosh me.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard src={Blog} link="https://github.com/ananyatiwari18/BlogApplication"
        h3="Blog App"
        p="Mystic Murmurs"
        />
        <ProjectCard src={SoshMe} link="https://github.com/ananyatiwari18/Social-Media-App"
        h3="Social Media App"
        p="Sosh Me"
        />
    </div>
    </section>
  );
}

export default Projects;
