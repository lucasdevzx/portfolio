import './Separate.css'

const Separate = ({title, subtitle}) => {
    return (
        <div className="separate">
            <hr></hr>
            <p>{title}</p>
            <p>/</p>
            <p>{subtitle}</p>
        </div>
    )
}

export default Separate