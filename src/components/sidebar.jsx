
import Avatar from '../img/103832320.jpg';
import SocialNetworks from './social-networks'
import InformationContainer from './information-container';

import "../styles/components/sidebar.sass";

const Sidebar = () => {
return <aside id="sidebar">
    <img src={Avatar} alt="Giovanna Almeida" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">
        Download currículo
    </a>
</aside>
};

export default Sidebar;