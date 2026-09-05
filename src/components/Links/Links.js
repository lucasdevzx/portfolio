import './Links.css'

const Links = ({link, image, title}) => {
    return (
        <div className={"links"}>

            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} />
                <p>{title}</p>
                <img src={"/images/arrow-link.svg"} alt={"arrow"} style={{ width: "25px", height: "25px" }} />
            </a>

        </div>
    )
}

export default Links