import './Contact.css'
import Separate from "../Separate/Separate";
import Info from "../Info/Info";
import Form from "../Form/Form";

const Contact = () => {
    return (
       <div id={"contact"} style={{minWidth: "100%", width: "100%", height: "100%", position: "relative"}}>
           <Separate title={"05. "} subtitle={"ENTRE EM CONTATO COMIGO"} />
           <div className={"contact"}>

               <div className={"contact-text"}>
                   <h1>
                       Vamos discutir
                       <br />
                       o seu projeto
                   </h1>
                   <p>
                       Tem uma ideia, um desafio ou precisa tirar
                       <br />
                       um projeto do papel ? Vamos conversar.
                       <br />
                       Estou aberto a novas oportunidades e
                       <br />
                       colaborações.
                   </p>
                   <Info
                       image={`${process.env.PUBLIC_URL}/images/chat.svg`}
                       title={"Entendimento"}
                       subtitle={"Vou entender suas necessidades e os objetivos do seu projeto."}

                   />
                   <Info
                       image={`${process.env.PUBLIC_URL}/images/idea.svg`}
                       title={"Estratégia"}
                       subtitle={"Proponho a melhor abordagem e solução para o seu desafio.."}

                   />
                   <Info
                       image={`${process.env.PUBLIC_URL}/images/shuttle.svg`}
                       title={"Execução"}
                       subtitle={"Transformarei a ideia em um produto de qualidade e com impacto."}

                   />
               </div>
               <div className={"contact-form"}>
                   <Form
                       name={"Nome"}
                       email={"Email"}
                       subject={"Assunto"}
                       message={"Mensagem"}
                       button={"Enviar"}
                       namePlaceholder={"Seu nome"}
                       emailPlaceholder={"Seu email"}
                       subjectPlaceholder={"Sobre seu projeto"}
                       messagePlaceholder={"Conte-me sobre seu projeto, objetivos e como posso ajudar..."}
                   />
               </div>
           </div>
       </div>
    )
}

export default Contact