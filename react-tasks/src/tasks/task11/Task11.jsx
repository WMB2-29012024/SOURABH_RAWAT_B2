import React, { useRef } from 'react'

const Task11 = () => {
    const countRef = useRef();

    const handleIncrease = () => {
        const currentNumber = countRef.current.innerText;
        countRef.current.innerText = Number(currentNumber) + 1;
    }
    return (
        <div>
            <h1 ref={countRef}>0</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default Task11