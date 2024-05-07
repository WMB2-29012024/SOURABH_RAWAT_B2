import React, { useState } from 'react'
import Counter from './Counter'

const Button = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }
    const handleDecrease = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <Counter count={count} />
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}

export default Button