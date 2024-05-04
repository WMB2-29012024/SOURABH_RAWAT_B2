import './Task7.css';
import ButtonProps from './components/ButtonProps'

const Task7 = () => {
    const handleButton = function () {
        alert("Button clicked!!")
    }
    return (
        <div className='button-center'>
            <ButtonProps btnClick={handleButton} />
            <ButtonProps btnClick={() => alert("second button clicked")} />
        </div>
    )
}

export default Task7