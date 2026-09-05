import './Form.css'
import Info from "../Info/Info";

const Form = (
    {
        name, email, subject, message, button, namePlaceholder, emailPlaceholder, subjectPlaceholder, messagePlaceholder
    }
) => {
    return (
        <div className={"form"}>

            <Info image={"/images/email.svg"} title={"Envie uma mensagem"} subtitle={"Retornarei o mais breve possível"} />

            <div className={"form-user"}>
                <div className={"form-user-input"} >
                    <p>{name}</p>
                    <input type={"text"} placeholder={namePlaceholder} />
                </div>
                <div className={"form-user-input"} >
                    <p>{email}</p>
                    <input type={"email"} placeholder={emailPlaceholder} />
                </div>
            </div>

            <div className={"form-subject"}>
                <p>{subject}</p>
                <input type={"text"} placeholder={subjectPlaceholder} />
            </div>

            <div className={"form-message"}>
                <p>{message}</p>
                <textarea placeholder={messagePlaceholder} />
            </div>

            <div className={"form-button"}>
                <button>{button}</button>
            </div>
        </div>
    )
}

export default Form