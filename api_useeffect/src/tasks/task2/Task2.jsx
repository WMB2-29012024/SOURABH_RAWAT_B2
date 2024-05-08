import React, { useState, useEffect } from 'react'

const Task2 = () => {
    const [todoData, settodoData] = useState([]);
    useEffect(() => {
        const fetchTodoData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            settodoData(data);
        }
        fetchTodoData();
    }, [])

    console.log(todoData);
    return (
        <div>
            <h1>TOdo List</h1>
            {
                todoData.map((item) => {
                    return <li>{item.title}</li>
                })
            }
        </div>
    )
}

export default Task2