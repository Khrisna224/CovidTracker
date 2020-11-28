import { formatter } from '../utils/formatNumber'

const Card = ({ confirm, recovered, death }) => {
    return (
        // <div className="card-container">
        //     <p>{name}</p>
        //     <p>{institution}</p>
        //     <p>{address}</p>
        //     <p>{phoneNumber}</p>
        // </div>
        <div className='row card-columns'>
            <div className="card text-white text-center bg-warning w-25">
                <div className="card-header"><h5 className='card-title'>Confirmed</h5></div>
                <div className="card-body">
                    <h3 className="card-text">{formatter.format(confirm)}</h3>
                </div>
            </div>
            <div className="card text-white text-center bg-success w-25">
                <div className="card-header"><h5 className='card-title'>Recovered</h5></div>
                <div className="card-body">
                    <h3 className="card-text">{formatter.format(recovered)}</h3>
                </div>
            </div>
            <div className="card text-white text-center bg-danger w-25">
                <div className="card-header"><h5 className='card-title'>Deaths</h5></div>
                <div className="card-body">
                    <h3 className="card-text">{formatter.format(death)}</h3>
                </div>
            </div>
        </div>
    )
};

export default Card;