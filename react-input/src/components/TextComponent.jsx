const TextComponent = (props) => {
    const { inputText } = props;
    return (
        <div>
            <h1>{inputText}</h1>
        </div>
    )
}

export default TextComponent