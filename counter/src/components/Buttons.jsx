const Buttons = (props) => {
    const { setCount } = props;

    const handleCountDecrease = function () {
        setCount(prev => prev !== 0 ? prev - 1 : 0)
    }
    const handleCountIncrease = function () {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <button onClick={handleCountDecrease}>Decrease</button>
            <button onClick={handleCountIncrease}>Increase</button>
        </div>
    )
}

export default Buttons