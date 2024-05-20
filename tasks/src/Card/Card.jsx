import './Card.css';

const Card = ({ data }) => {
    return (
        <div className='card-container'>
            <div className="upper-container">
                <img src={data.thumbnailUrl} alt="profile" />
                <h4>Rani The {data.id}</h4>
                <p>Host</p>
            </div>
            <div className="middle-container">
                <h4>{data.title}</h4>
            </div>
            <div className="end-container">
                <i className="fa-solid fa-location-dot"></i>
                <p>Seoul, 11{data.id}</p>
            </div>
        </div>
    )
}

export default Card