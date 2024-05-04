import RandomNum from "./components/RandomNum";

const Task8 = () => {
    const randomNumber = Math.round(Math.random() * 100);
    return (
        <div >
            <RandomNum randomNumber={randomNumber} />
        </div >
    )
}

export default Task8