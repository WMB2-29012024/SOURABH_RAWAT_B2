import { useState } from 'react';
import './CardContainer.css';
import TaskContainer from '../TaskContainer/TaskContainer';

const CardContainer = () => {
    const [option, setoption] = useState([])

    const handleList = () => {
        option.push("0")
        setoption([...option]);
    }

    return (
        <div className='card'>
            {
                option.map((item, idx) => {
                    return <>
                        <TaskContainer key={idx} length={idx} option={option} setoption={setoption} />
                    </>
                })
            }
            <button className='add-btn' onClick={handleList}>Create</button>
        </div>
    )
}

export default CardContainer