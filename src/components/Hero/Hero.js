import './Hero.css'
import Home from "../Home/Home";
import Service from "../Service/Service";
import About from "../About/About";
import Project from "../Project/Project";
import FadeInSection from "../FadeInSection/FadeInSection";
import Separate from "../Separate/Separate";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Hero = () => {

    return (
        <div className={"hero"}>

            <FadeInSection delay={0.2}>
                <Home id="home" />
            </FadeInSection>

            <FadeInSection delay={0.2}>
                <Service id="service" />
            </FadeInSection>

            <FadeInSection delay={0.2}>
                <About id="about" />
            </FadeInSection>

            <FadeInSection delay={0.2}>
                <Project
                    id="project"
                    left={false}
                    topic={true}
                    image={"/images/levely.png"}
                    title={"LEVELY FITNESS"}
                    stacks={"Java // Spring // PostgreSQL // Docker // React"}
                description={"" +
                    "Desenvolvimento de uma plataforma para gerenciamento e" +
                    " acompanhamento de treinos, com foco em progressão de carga e" +
                    " histórico de desempenho. O backend é desenvolvido em Java e Spring," +
                    " utilizando PostgreSQL, Spring Security e Docker, com integração a" +
                    " APIs externas. O projeto busca centralizar o planejamento e registro de" +
                    " treinos em uma aplicação escalável e intuitiva."}
            />
            </FadeInSection>

            <FadeInSection delay={0.2}>
            <Project
                left={true}
                topic={false}
                image={"/images/posting.png"}
                title={"POSTING SOCIAL"}
                stacks={"Java // Spring // PostgreSQL // Docker // Javascript"}
                description={"" +
                    "O Posting é uma aplicação RESTful para gerenciamento de usuários, postagens, comentários e categorias." +
                    " Desenvolvido com arquitetura em camadas, aplicando DTOs, Services, Repositories e Mappers." +
                    " Possui autenticação e autorização com JWT, controle de acesso por roles e criptografia de senhas." +
                    " A API conta ainda com validação de dados, paginação, tratamento de exceções e relacionamentos entre entidades." +
                    " O projeto também possui um frontend integrado para interação com os recursos da aplicação."
                }
            />
            </FadeInSection>

            <FadeInSection delay={0.2}>
                <Skills  id="skills"/>
            </FadeInSection>

            <FadeInSection delay={0.2}>
                <Contact id="contact"/>
            </FadeInSection>

        </div>
    )
}

export default Hero