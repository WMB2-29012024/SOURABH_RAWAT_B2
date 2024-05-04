import './Task3.css'
import InputElem from './components/InputElem'

const Task3 = () => {
    return (
        <div className='input-container'>
            <form>
                <InputElem inputType={"text"} labelText={"Name"} inputPlaceholder={'Enter your name'} />
                <InputElem inputType={"email"} labelText={"Email"} inputPlaceholder={'Enter your email'} />
                <InputElem inputType={"tel"} labelText={"Phone Number"} inputPlaceholder={'Enter your phone no.'} />
            </form>
            <div className="button-dv">
                <button type='submit' style={{ padding: '6px 10px' }}>Submit</button>
            </div>
        </div>
    )
}

export default Task3