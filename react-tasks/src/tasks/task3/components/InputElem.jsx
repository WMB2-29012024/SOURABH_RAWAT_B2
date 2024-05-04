import './InputElement.css';

const InputElem = (props) => {
    const { inputType, labelText, inputPlaceholder } = props;
    return (
        <div className="input-type">
            <label htmlFor={inputType}>{labelText}: </label>
            <input type={inputType} placeholder={inputPlaceholder} id={inputType} style={{ padding: '6px 10px' }} />
        </div>
    )
}

export default InputElem