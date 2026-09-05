import './PopUp.css'
import Topics from "../Topics/Topics";

const PopUp = () => {
    return (

        <div className={"pop-up"}>

            <div className={"pop-up-call"}>

                <img src={"./images/email.svg"} alt={"email"} />
                <div className={"pop-up-text"}>
                    <h1>Vamos conversar?</h1>
                    <p>silvalucas.me.contact@gmail.com</p>
                </div>

            </div>

            <div className={"pop-up-links"}>
                <a href={"https://wa.me/5522997895653"} target={"_blank"} rel={"noopener noreferrer"}>
                    <img src={"/images/whatsapp.svg"} alt={"WhatsApp"} />
                </a>
                <a href={"https://linkedin.com/in/silvalucasme"} target={"_blank"} rel={"noopener noreferrer"}>
                    <img src={"/images/linkedin.svg"} alt={"LinkedIn"} />
                </a>
                <a href={"https://instagram.com/zlukenfps"} target={"_blank"} rel={"noopener noreferrer"}>
                    <img src={"/images/instagram.svg"} alt={"Instagram"} />
                </a>

            </div>

        </div>

    )
}

export default PopUp