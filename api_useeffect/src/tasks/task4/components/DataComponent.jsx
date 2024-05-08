import React from 'react'

const DataComponent = ({ data }) => {
    return (
        <div>
            {
                data.title ? <>
                    <p>ID:{data.id}</p>
                    <p>Title:{data.title}</p>
                </> : <p>No data found</p>
            }
        </div>
    )
}

export default DataComponent