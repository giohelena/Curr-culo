import '../styles/components/main-content.sass';
import AboutContainer from './about-container';
import ProjectsContainer from './projects-container';
import TechnologiesContainer from './technologies-container';

const MainContent = () => {
    return(
        <main id="main-content">
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    )
};

export default MainContent;