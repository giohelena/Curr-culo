import '../styles/components/main-content.sass';
import AboutContainer from './about-container';
import WebDesignContainer from './webdesign-container';
import TechnologiesContainer from './technologies-container';
import MoreInformationContainer from './moreinformation';
import IntroMoreInfo from './intro-moreinformation';
import Experience from './experience';

const MainContent = () => {
    return(
        <main id="main-content">
            <AboutContainer />
            <Experience />
            <WebDesignContainer />
            <TechnologiesContainer />
            <IntroMoreInfo />
            <MoreInformationContainer />
            
        </main>
    )
};

export default MainContent;