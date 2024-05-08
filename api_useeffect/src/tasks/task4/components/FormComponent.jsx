const FormComponent = ({ setdata }) => {
    const handleInput = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.todoInput.value}`);
        const jsonData = await response.json();
        setdata(jsonData);
    }
    return (
        <div>
            <form onSubmit={handleInput}>
                <input type="number" id='todoInput' required />
                <button type='submit'>Click</button>
            </form>
        </div>
    )
}

export default FormComponent