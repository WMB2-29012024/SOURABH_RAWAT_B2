import React, { useState } from 'react'
const Counter = () => {
    const [toggle, setToggle] = useState(0);
    let count = 0;
    console.log("first", count);

    const handleClick = () => {
        console.log(count);
        count++;
        console.log(count);
        setToggle(toggle + 1);
    }
    console.log("outer", count);
    return (
        <div>
            {console.log("return", count)}
            <button onClick={handleClick}>Inc {count}</button>
        </div>
    )
}

export default Counter