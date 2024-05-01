import React from 'react'

const CardComponent = (props) => {
    const { inputValue } = props;
    return (
        <div>
            <h1>{inputValue}</h1>
        </div>
    )
}

export default CardComponent