import React, { useState } from 'react'
import CardContainer from './CardContainer/CardContainer';

const Container = () => {
    const [list, setlist] = useState([]);
    const handleButton = () => {
        list.push("kuch bhi");
        setlist([...list]);
    }
    return (
        <div>
            <button onClick={handleButton}>Add</button>
            <div className='mapper' style={{ display: "flex", margin: "12px" }}>
                {
                    list.map((item, id) => {
                        return <CardContainer key={id} />
                    })
                }
            </div>
        </div>
    )
}

export default Container