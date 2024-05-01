const InputComponent = (props) => {
    const { setInputValue } = props;
    const handleInputValue = (e) => {
        const typed = e.target.value;
        setInputValue(typed);
    }
    return (
        <div>
            <input type="text" onChange={handleInputValue} />
        </div>
    )
}

export default InputComponent