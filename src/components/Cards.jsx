import './cards.css';

const Cards = (props) => {
    const {data} = props;
    return(
        <div className='cards'>
                {
                    data.map((item) => {
                        return(
                            <div className='card' key={item.id}>
                                <div className='card-color' style={{backgroundColor: item.id}}></div>
                                <div className='card-content'>
                                    <p>{item.id}</p>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Cards;