import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import "../styles/components/information-container.sass";

const InformationContainer = () =>{
    return <section id="information-container">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p> (11) 93737-4153</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="mail-icon" />
            <div>
                <h3>E-mail</h3>
                <p>contato.gihelena@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Butantã, São Paulo - SP</p>
            </div>
        </div>
    </section>
    
};

export default InformationContainer;