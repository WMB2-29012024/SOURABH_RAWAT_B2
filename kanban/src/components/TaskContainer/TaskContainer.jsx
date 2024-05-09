import './TaskContaineer.css'
const TaskContainer = ({ option, setoption, length }) => {

    const handleDeleteBtn = () => {
        const filteredArr = option.filter((num, idx) => idx !== length)
        console.log(filteredArr)
        setoption(filteredArr);
    }
    return (
        <div className='task-container'>
            <p>ID:{length}</p>
            <input type="text" placeholder='type your todo' />
            <textarea style={{ marginTop: "5px" }}></textarea>
            <button onClick={() => handleDeleteBtn()}>delete</button>
        </div>
    )
}

export default TaskContainer