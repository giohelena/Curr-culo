import "../styles/components/main-content.sass";
import img1 from "../../src/img/Android Large - 1.jpg";
import img2 from "../../src/img/Frame 8.jpg";

const UiUxContainer = () => {
    return (
    <section className="about-container">
        <h2>UI/UX Design</h2>
        <p>Possuo formação em UX Design pela Mentorama ("UX Design do Zero") e pela Udemy ("UX e Design Thinking: Experiência do Usuário nos Negócios").</p>
        <p>Também tenho cursos complementares em UX Writing e em Metodologias Ágeis - Scrum, Kanban, Lean UX e Design Sprint, inclusive com certificação SFC. </p>
        <p>Atualmente, atuo como UX Designer na SouJunior, trabalhando em um projeto voluntário.</p>
        <p>Também possuo dois estudos de caso que podem ser visualizados no meu portfolio - um relacionado ao segmento de supermercados e o outro, ao de viagens.</p>  
        <br/>
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

export default UiUxContainer;