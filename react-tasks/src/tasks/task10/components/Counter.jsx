import React from 'react'

const Counter = (props) => {
    const { countNumber } = props;
    return (
        <div>
            <h1>{countNumber}</h1>
        </div>
    )
}

export default Counter