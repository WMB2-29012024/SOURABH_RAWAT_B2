import React from 'react'
import { useParams } from 'react-router-dom'

const Course = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h3>
                This is {params.coursename} course.
            </h3>
        </div>
    )
}

export default Course