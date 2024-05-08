import React, { useEffect } from 'react'

const Task1 = () => {
    useEffect(() => {
        // const fetchTodoData = async () => {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        //     const data = await response.json();
        //     console.log(data);
        // }
        // fetchTodoData();

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, [])

    return (
        <div>
            Hello World
        </div>
    )
}

export default Task1