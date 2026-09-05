import './Nav.css'
import Topics from "../Topics/Topics";
import PopUp from "../PopUp/PopUp";

const Nav = () => {
    return (
        <div className="nav">
            <img className="profile-picture" src={"./images/profile-picture.png"} alt="Lucas" />
            <h1>Lucas Silva</h1>
            <h2>Engenheiro de Software</h2>

            <hr style={{marginTop: "30px"}}></hr>

            <div className="nav-links">
                <Topics link={"#home"} image={"./images/home.svg"} title={"Início"} />
                <Topics link={"#service"} image={"./images/service.svg"} title={"Serviços"} />
                <Topics link={"#about"} image={"./images/profile.svg"} title={"Sobre"} />
                <Topics link={"#project"} image={"./images/folder.svg"} title={"Projetos"} />
                <Topics link={"#contact"} image={"./images/phone.svg"} title={"Contato"} />
            </div>

            <hr style={{marginTop: "150px", opacity: "0"}}></hr>

            <PopUp />
            <p>© 2026 Lucas Silva</p>
        </div>
    );
};

export default Nav