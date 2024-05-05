import React from 'react'

const UserVotingStatus = ({ age }) => {
    return (
        <div>
            {age >= 18 ? (<h1>you <span style={{ color: "red" }}>can</span> vote now.</h1>) : (<h1>your age is below 18. you <span style={{ color: "red" }}>can not</span> vote.</h1>)
            }
        </div>
    )
}

export default UserVotingStatus