import React, { useState } from 'react'

const Task3 = () => {
    const [todoData, settodoData] = useState([]);

    const fetchTodoData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        settodoData(data);
    }

    console.log(todoData);


    return (
        <div>
            <button onClick={fetchTodoData}>Get Data</button>
            {
                todoData.map((item, id) => {
                    console.log("first")
                    return <li key={id}>{item.title}</li>
                })
            }
        </div>
    )
}

export default Task3