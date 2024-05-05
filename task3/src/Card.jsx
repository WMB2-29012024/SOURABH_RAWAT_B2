import React from 'react'
import CardList from './CardList'
import './Card.css'

const Card = () => {
    const cardArray = ["Rohan", "Mohan", "Sanjay", "Rohit", "Suman", "Asha", 'Sony', 'Samsung'];
    return (
        <div className='card-container'>
            <CardList cardArray={cardArray} />
        </div>
    )
}

export default Card