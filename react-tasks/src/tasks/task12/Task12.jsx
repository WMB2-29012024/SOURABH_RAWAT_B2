import React, { useRef } from 'react'

const Task12 = () => {
    const inputRef = useRef();

    const handleInputChange = function () {
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <input type="text" onChange={handleInputChange} ref={inputRef} />
        </div>
    )
}

export default Task12