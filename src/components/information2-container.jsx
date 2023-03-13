import "../styles/components/information-container.sass";
import { TiMortarBoard } from "react-icons/ti";

const InformationContainer = () =>{
    return <section id="information-container">
        <p className="info-title">Formação</p>
        <div className="info-card">
            <TiMortarBoard id="mortarboard"/>
            <div>
                <h3>Direito</h3>
                <h3>Concluída em Dez.2020</h3>
                <p>Universidade P. Mackenzie</p>
            </div>
        </div>
        <div className="info-card">
        <TiMortarBoard id="mortarboard"/>
            <div>
                <h3>Análise e Desenvolvimento de Sistemas</h3>
                <h3>Conclusão em Jul.2024</h3>
                <p>Faculdade das Américas</p>
            </div>
        </div>
    </section>
    
};

export default InformationContainer;