import './Card.css'

const Card = ({image, title, description, check}) => {
    return (

        <div className={"card ct-hover-expand"}>
            <div className={"card-icon"}>
                <img src={image} alt={title} />
            </div>
            <h1>{title}</h1>
            <hr></hr>
            <p>{description}</p>
            <div className={"card-footer"}>
                <img src={`${process.env.PUBLIC_URL}/images/check.svg`} alt={title} style={{width: '20px', height: '20px'}}/>
                <p style={{fontSize: '0.875rem'}}>{check}</p>
            </div>
        </div>

    );
}

export default Card;