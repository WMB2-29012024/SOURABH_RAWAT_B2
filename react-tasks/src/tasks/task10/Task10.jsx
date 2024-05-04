import React, { useState } from 'react'
import Counter from './components/Counter'
import Button from './components/Button'

const Task10 = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Counter countNumber={count} />
            <Button setCount={setCount} />
        </div>
    )
}

export default Task10