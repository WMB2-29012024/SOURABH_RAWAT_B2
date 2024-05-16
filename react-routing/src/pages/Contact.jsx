import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation();
    return (
        <div>
            <h3>This is contact. {location.state}</h3>
        </div>
    )
}

export default Contact