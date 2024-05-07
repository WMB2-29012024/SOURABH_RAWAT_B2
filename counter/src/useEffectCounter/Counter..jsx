import React, { useEffect } from 'react'

const Counter = () => {
    useEffect(() => {
        console.log("Hello")
    }, []);

    const handleButtonClick = () => {
        console.log("world")
    }
    return (
        <div>
            <button onClick={handleButtonClick}>Increase</button>
        </div>
    )
}

export default Counter