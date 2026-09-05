import './Home.css'
import Links from "../Links/Links";
import Separate from "../Separate/Separate";


const Home = ({id}) => {
    return (
        <div id={id} style={{minWidth: "100%", width: "100%", height: "100%", position: "relative"}}>
            <Separate title={"0. "} subtitle={"DESENVOLVEDOR FULL-STACK & BACK-END"} />
            <div className="home">
                <h1>
                    Transformo suas <strong>ideias</strong>
                    <br />
                    em <strong>soluções</strong> digitais
                    <br />
                    <strong>modernas</strong>, <strong>bonitas</strong> e <strong>robustas</strong>.
                </h1>
                <h2>
                    Eu sou o Lucas, desenvolvedor Full-Stack com foco em Back-End e
                    <br />
                    graduando em Ciência da Computação.
                    <br />
                    <br />
                    Gosto de transformar problemas em soluções digitais simples e eficientes,
                    <br />
                    buscando evoluir como desenvolvedor e profissional.
                </h2>
                <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                    <Links link={"https://github.com/lucasdevzx"} image={`${process.env.PUBLIC_URL}/images/github.svg`} title={"GitHub"} />
                    <Links link={"https://www.linkedin.com/in/silvalucasme/"} image={`${process.env.PUBLIC_URL}/images/linkedin.svg`} title={"Linkedin"} />
                    <Links link={"https://drive.google.com/file/d/1r9CjJ1r8MJoAiLuxg4ClAFFw4yMXGQrn/view?usp=sharing"} image={`${process.env.PUBLIC_URL}/images/curriculum.svg`} title={"Currículo"} />
                </div>
            </div>
            <img className={"background-image"} src={`${process.env.PUBLIC_URL}/images/shape.svg`} alt="Imagem de fundo" />
        </div>
    )
}

export default Home