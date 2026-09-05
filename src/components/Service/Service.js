import './Service.css'
import Card from "../Card/Card";
import Separate from "../Separate/Separate";

const Service = ({id}) => {
    return (
        <div id={id} style={{minWidth: "100%", width: "100%", height: "100%", position: "relative"}}>
            <Separate title={"01. "} subtitle={"SERVIÇOS"} />
            <div className={"service-container"}>
                <div className={"service"}>
                    <Card
                        image={`${process.env.PUBLIC_URL}/images/landing-page.svg`}
                        title={"Landing Pages"}
                        description={"Crio páginas modernas e responsivas para apresentar sua marca, produto ou serviço de forma simples e atrativa."}
                        check={"Design focado em conversão"}
                    />
                    <Card
                        image={`${process.env.PUBLIC_URL}/images/code.svg`}
                        title={"Aplicações Web"}
                        description={"Transformo ideias em aplicações web funcionais, intuitivas e pensadas para facilitar o dia a dia. "}
                        check={"Experiência do usuário intuitiva"}
                    />
                    <Card
                        image={`${process.env.PUBLIC_URL}/images/server.svg`}
                        title={"APIs & Backend"}
                        description={"Desenvolvo a parte por trás da aplicação, conectando dados, regras e funcionalidades de forma segura e organizada."}
                        check={"Segurança e escalabilidade"}
                    />
                </div>
            </div>
        </div>
)
}

export default Service