import { SiMicrosoftoffice } from "react-icons/si";
import { HiLanguage } from "react-icons/hi2";
import { DiScrum } from "react-icons/di";

import "../styles/components/technologies-container.sass"

const MoreInformation = [
    { id: "office", name: "Microsoft Office", icon:<SiMicrosoftoffice />, description: "Conhecimentos avançados em Pacote Office (Word, Excel, Outlook, Teams, PowerPoint"},
    { id: "language", name: "Idiomas", icon:<HiLanguage />, description: "Inglês avançado | Alemão básico | Espanhol Básico"},
    { id: "agil", name: "Metodologias Ágeis", icon:<DiScrum />, description: "Scrum (certificação SFC) | Kanban | Lean UX | Design Sprint"}
];

const MoreInformationContainer = () => {
    return (
    <section className='technologies-container'>
        <div className='technologies-flex'>
            {MoreInformation.map((info) => (
                <div className='technology-card' id={info.id} key={info.id}>
                    {info.icon}
                    <div className='technologie-info'>
                        <h3>{info.name}</h3>
                        <p>{info.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>

    )
};

export default MoreInformationContainer;