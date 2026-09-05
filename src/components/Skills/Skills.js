import './Skills.css'
import Separate from "../Separate/Separate";
import Tools from "../Tools/Tools";

const Skills = () => {
    return (
        <>
            <Separate title={"04. "} subtitle={"MINHAS HABILIDADES"} />
            <div className={"skills"}>
                <div className={"skills-text-container"}>
                    <h1>
                        Entre Arquitetura e
                        <br />
                        Engenharia.
                    </h1>
                    <p>
                        Para construir aplicações completas, busco combinar
                        <br />
                        diferentes conhecimentos e ferramentas ao longo de
                        <br />
                        todo o processo de desenvolvimento.
                        <br />
                        <br />
                        Tenho foco principalmente na construção de backends, trabalhando
                        <br />
                        com regras de negócio, APIs, bancos de dados, autenticação
                        <br />
                        e integração entre sistemas, além de conhecimentos de
                        <br />
                        desenvolvimento fullstack.
                        <br />
                        <br />
                        Também procuro aplicar boas práticas de engenharia de software
                        <br />
                        para criar aplicações organizadas, seguras, testáveis e fáceis de manter.
                        <br />
                        <br />
                        Meu objetivo é utilizar cada tecnologia de acordo com a necessidade
                        <br />
                        do projeto, entendendo não apenas como uma ferramenta
                        <br />
                        funciona, mas como ela pode contribuir para construir
                        <br />
                        soluções melhores.
                    </p>
                </div>
                <div className={"skills-container"}>
                    <Tools image="/images/java.svg" name="Java" />
                    <Tools image="/images/spring.svg" name="Spring" />
                    <Tools image="/images/postgresql.svg" name="PostgreSQL" />
                    <Tools image="/images/javascript.svg" name="Javascript" />
                    <Tools image="/images/docker.svg" name="Docker" />
                    <Tools image="/images/test.svg" name="Testes Automatizados" />
                    <Tools image="/images/react.svg" name="React" />
                    <Tools image="/images/tailwind.svg" name="Tailwind CSS" />
                    <Tools image="/images/landing-page.svg" name="UI/UX Design" />

                </div>
            </div>

        </>
    )
}

export default Skills