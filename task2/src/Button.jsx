const Button = ({ count, setCount }) => {
    const handleCount = (e) => {
        e.preventDefault();
        setCount(prev => prev + 1)
    }
    return (
        <div>
            <button onClick={handleCount}>Click me {count}</button>
        </div>
    )
}

export default Button