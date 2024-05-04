import React from 'react'

const ButtonProps = (props) => {
    const { btnClick } = props;
    return (
        <div>
            <button onClick={btnClick} style={{ padding: '6px 10px', margin: '4px' }}>Click</button>
        </div>
    )
}

export default ButtonProps