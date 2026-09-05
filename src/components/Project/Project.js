import './Project.css'
import Links from "../Links/Links";
import Separate from "../Separate/Separate";

const Project = ({id, left, topic, image, title, stacks, description}) => {

    if (left === false && topic === true) {
        return (
            <div id={id}>
                <Separate title={"03. "} subtitle={"PROJETOS"} />
                <div className={"project-container"}>
                    <div className={"project"}>
                        <div className={"project-img"}>
                            <img src={image} alt="{title}"/>
                        </div>
                        <div className={"project-info"}>
                            <h2>{title}</h2>
                            <h3>{stacks}</h3>
                            <p>{description}</p>
                            <Links image={`${process.env.PUBLIC_URL}/images/github.svg`} link={"https://br.pinterest.com/pin/1126814769316121171/"} title={"Ver projeto"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (left === false && topic === false) {
        return (
            <div id={id} className={"project-container"}>
                <div className={"project"}>
                    <div className={"project-img"}>
                        <img src={image} alt="{title}"/>
                    </div>
                    <div className={"project-info"}>
                        <h2>{title}</h2>
                        <h3>{stacks}</h3>
                        <p>{description}</p>
                        <Links image={`${process.env.PUBLIC_URL}/images/github.svg`} link={"https://br.pinterest.com/pin/1126814769316121171/"} title={"Ver projeto"} />
                    </div>
                </div>
            </div>
        )
    }

    if (left === true && topic === true) {
        return (
            <div id={id}>
                <Separate title={"03. "} subtitle={"PROJETOS"} />
                <div className={"project-container"}>
                    <div className={"project"}>
                        <div className={"project-info"}>
                            <h2>{title}</h2>
                            <h3>{stacks}</h3>
                            <p>{description}</p>
                            <Links image={`${process.env.PUBLIC_URL}/images/github.svg`} link={"https://br.pinterest.com/pin/1126814769316121171/"} title={"Ver projeto"} />
                        </div>
                        <div className={"project-img"}>
                            <img src={image} alt="{title}"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (left === true && topic === false) {
        return (
            <div id={id} className={"project-container"}>
                <div className={"project"}>
                    <div className={"project-info"}>
                        <h2>{title}</h2>
                        <h3>{stacks}</h3>
                        <p>{description}</p>
                        <Links image={`${process.env.PUBLIC_URL}/images/github.svg`} link={"https://br.pinterest.com/pin/1126814769316121171/"} title={"Ver projeto"} />
                    </div>
                    <div className={"project-img"}>
                        <img src={image} alt="{title}"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Project