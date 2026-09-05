import './Info.css'

const Info = ({image, title, subtitle}) => {
    return (
        <div className={"info"}>

            <div className={"info-image"}>
                <img src={image} alt={title} />
            </div>

            <div className={"info-text"}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>

        </div>
    )
}

export default Info