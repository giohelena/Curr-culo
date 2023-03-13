
import Avatar from '../img/103832320.jpg';
import SocialNetworks from './social-networks'
import InformationContainer from './information-container';

import "../styles/components/sidebar.sass";
import Information2Container from './information2-container';
import Certificates from './certificates';

const Sidebar = () => {
return <aside id="sidebar">
    <img src={Avatar} alt="Giovanna Almeida" />
    <p className="title">UI/UX Designer e Web Developer</p>
    <SocialNetworks />
    <br/>
    <InformationContainer />
    <a href="https://giohelena.website/" target="_blank" className="btn">
        Veja meu portfolio
    </a>
    <br />
    <br/>
    <Information2Container />
    <Certificates/>
</aside>
};

export default Sidebar;