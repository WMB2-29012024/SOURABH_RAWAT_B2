import React, { useRef } from 'react'

const Button = () => {
    const countRef = useRef(0);
    const buttonRef = useRef();
    const handleBtn = () => {
        countRef.current++;

        buttonRef.current.innerHTML = `Click me - ${countRef.current}`;
    }
    return (
        <div>
            <button ref={buttonRef} onClick={handleBtn}>Click me - {countRef.current}</button>
        </div>
    )
}

export default Button