const InputData = () => {
    const handleLog = function (e) {
        console.log(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleLog} placeholder="It's log your value" style={{ padding: '6px 10px' }} />
        </div>
    )
}

export default InputData