import './About.css'
import Separate from "../Separate/Separate";

const About = ({id}) => {
    return (
        <div id={id}>
            <Separate title={"02. "} subtitle={"QUEM SOU EU"} />
                <div className={"about"}>
                    <div className={"text-container"}>
                        <div class="tl-timeline">
                            <div class="tl-timeline__dot tl-timeline__dot--first"></div>
                            <div class="tl-timeline__dot"></div>
                            <div class="tl-timeline__dot"></div>
                            <div class="tl-timeline__dot tl-timeline__dot--last"></div>
                        </div>
                        <p className="description">
                            Olá, eu sou o <strong>Lucas</strong>. desenvolvedor de software e estudante de
                            <br/>
                            Ciência da Computação.
                            <br />
                            <br />
                            Minha tragetória na tecnologia começou de
                            <br />
                            forma autodidata, movida epla <strong>curiosidade</strong> e pela vontade de
                            <strong> aprender</strong>.
                            <br />
                            <br />
                            Antes disso, experiências profissionais em outras áreas me ajudaram
                            <br />
                            a desenvolver <strong>comunicação</strong>, e <strong>organização</strong>, <strong>responsabilidade</strong> e
                            <br />
                            trabalho em equipe.
                            <br />
                            <br />
                            Hoje, direciono meus estudos para desenvolvimento <strong>backend</strong> e
                            <br />
                            <strong>fullstack</strong>, criando projetos e buscando transformar conhecimento em
                            <br />
                            aprendizados e oportunidades para evoluir profissionalmente.
                        </p>
                    </div>
                    <div className={"image-container"}>
                        <img src="/images/about-image.png" alt="Lucas"/>
                    </div>
                </div>
        </div>
    )
}

export default About