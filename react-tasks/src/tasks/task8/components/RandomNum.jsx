const RandomNum = (props) => {
    const { randomNumber } = props;
    return (
        <div>
            <h2>Heading is Here.</h2>
            {
                ((randomNumber % 2) === 0) && <h1>
                    This is Even Number and Number is {randomNumber}
                </h1>
            }
            {
                (!(randomNumber % 2) === 0) && <h2>Lorem ipsum dolor sit amet.</h2>
            }
        </div>
    )
}

export default RandomNum