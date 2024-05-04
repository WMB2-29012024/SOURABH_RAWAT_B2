const Button = ({ setCount }) => {
    const handleIncrease = function () {
        setCount(count => count + 1)
    }
    const handleDecrease = function () {
        setCount(count => count - 1)
    }
    return (
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}

export default Button