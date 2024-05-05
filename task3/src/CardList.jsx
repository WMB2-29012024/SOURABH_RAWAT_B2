import './CardList.css'

const CardList = ({ cardArray }) => {
    return (
        <div className='card-box'>
            {
                cardArray.map((item, idx) => {
                    return <div key={idx} className='card'><h2>
                        Name : {item}
                    </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod non similique facere deleniti sunt ipsam numquam consequuntur est modi, aliquam voluptates blanditiis odit id repellat necessitatibus obcaecati architecto placeat!</p>
                    </div>
                })
            }
        </div>
    )
}

export default CardList