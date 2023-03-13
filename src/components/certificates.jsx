import "../styles/components/information-container.sass";
import { TbCertificate } from "react-icons/tb";

const Certificates = () =>{
    return <section id="information-container">
        <p className="info-title">Certificações</p>
        <div className="info-card">
            <TbCertificate id="certificate-icon" />
            <div>
                <h3>Ux Design do Zero</h3>
                <h3>Concluído em Mar. 2023</h3>
                <p>Mentorama</p>
            </div>
        </div>
        <div className="info-card">
            <TbCertificate id="certificate-icon" />
            <div>
                <h3>Métodos ágeis de A a Z</h3>
                <h3>Concluído em Mar. 2023</h3>
                <p>Udemy</p>
            </div>
        </div>
        
        <div className="info-card">
            <TbCertificate id="certificate-icon" />
            <div>
                <h3>Introduction to UX Writing</h3>
                <h3>Concluído em Fev. 2023</h3>
                <p>Udemy</p>
            </div>
        </div>
        <div className="info-card">
            <TbCertificate id="certificate-icon"/>
            <div>
                <h3>Transitioning into UX Writing</h3>
                <h3>Concluído em Fev. 2023</h3>
                <p>Udemy</p>
            </div>
        </div>
        <div className="info-card">
            <TbCertificate id="certificate-icon" />
            <div>
                <h3>Design Sprint: Create a great product prototype in 5 days</h3>
                <h3>Concluído em Fev. 2023</h3>
                <p>Udemy</p>
            </div>
        </div>
        <div className="info-card">
            <TbCertificate id="certificate-icon"/>
            <div>
                <h3>Scrum Fundamentals Certificate</h3>
                <h3>Concluído em Fev. 2023</h3>
                <p>SCRUMStudy</p>
            </div>
        </div>
        <div className="info-card">
            <TbCertificate id="certificate-icon" />
            <div>
                <h3>UX e Design Thinking</h3>
                <h3>Concluído em Jan. 2023</h3>
                <p>Udemy</p>
            </div>
        </div>
        <div className="info-card">
            <TbCertificate id="certificate-icon" />
            <div>
                <h3>Adobe XD</h3>
                <h3>Concluído em Jan. 2023</h3>
                <p>Origamid</p>
            </div>
        </div>
        <div className="info-card">
            <TbCertificate id="certificate-icon" />
            <div>
                <h3>UI Design para Iniciantes</h3>
                <h3>Concluído em Dez. 2022</h3>
                <p>Origamid</p>
            </div>
        </div>
        <div className="info-card">
            <TbCertificate id="certificate-icon"/>
            <div>
                <h3>UI Design Avançado</h3>
                <h3>Concluído em Dez. 2022</h3>
                <p>Origamid</p>
            </div>
        </div>
        <div className="info-card">
            <TbCertificate id="certificate-icon"/>
            <div>
                <h3>Fullstack Developer</h3>
                <h3>Concluído em Jul. 2022</h3>
                <p>Startse</p>
            </div>
        </div>
    </section>
    
};

export default Certificates;