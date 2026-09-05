import './Topics.css'

const Topics = ({ link, image, title }) => {
    return (

        <div className={"topics"}>
            <a href={link}  rel="noopener noreferrer">
                <img src={image} alt={title} />
                <p>{title}</p>
            </a>
        </div>

    )
}

export default Topics