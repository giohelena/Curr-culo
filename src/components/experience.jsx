import "../styles/components/main-content.sass";
import img1 from "../../src/img/Android Large - 1.jpg";
import img2 from "../../src/img/Frame 8.jpg";


const Experience = () => {
    return (
        <section className="projects-container">
            <h2>Experiência profissional</h2>
            <div className="experience">
                <p>Mar. 2023 - Atualmente<br />
                <h3>SOUJUNIOR | UX DESIGNER</h3>
                </p>
                <p>Trabalho voluntário<br /><br />
                Nosso time é responsável por desenvolver uma plataforma que conecte profissionais de nível Junior a empresas com projetos a serem desenvolvidos e dispostas a contratar.<br /><br />
                Como UX Designer, estou responsável pela parte de Research e desenvolvimento das telas em alta fidelidade.<br /><br />
                O time trabalha com as metodologias Scrum, Kanban e Design Sprint.<br /><br />
                Embora seja um trabalho voluntário, possuímos o apoio da SouJunior para o desenvolvimento do projeto, com a possibilidade de implementação pela própria empresa, a depender dos resultados apresentados.<br /><br />
                Algumas das habilidades desenvolvidas são:<br /><br />
                - Trabalho com time multidisciplinar;<br />
                - Figma;<br />
                - Jira;<br />
                - UI Design;<br />
                - UX Research;<br />
                - Metodologia Scrum, Kanban e Design Sprint. 
                </p>
            </div> 
            <br />
            <h2>Cases de UX/UI</h2>
            <br />
            <p>Veja abaixo dois dos meus projetos individuais. São cases de UX/UI Design desenvolvidos exclusivamente por mim:</p>
            <div className="project-container">
                <a href="https://giohelena.website/index.php/2023/03/06/helper-o-seu-assistente-de-viagens-estudo-de-caso-ux-2/" target="_blank">
                <div>
                    <img src={img1} id="img"></img><br/><br/>
                    <h3>Helper, o seu assistente de viagens</h3>
                </div>
                </a>
                <a href="https://giohelena.website/index.php/2023/03/06/mercato-economizando-na-hora-de-fazer-mercado-estudo-de-caso-ux/" target="_blank">
                <div>
                    <img src={img2} id="img"></img><br/><br/>
                    <h3>Mercato, o seu mercado mais barato</h3>
                </div>
                </a>
            </div>    
        </section>
    )
};

export default Experience;