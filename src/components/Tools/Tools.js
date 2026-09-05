import './Tools.css'

const Tools = ({image, name}) => {
    return (
        <div className={"tools"}>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
        </div>
    )
}

export default Tools