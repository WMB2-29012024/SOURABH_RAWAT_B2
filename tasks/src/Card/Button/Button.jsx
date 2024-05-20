import './Button.css';

const Button = ({ handleButton, btntext }) => {
    return (
        <div>
            <button className='btn' onClick={handleButton}>{btntext}</button>
        </div>
    )
}

export default Button