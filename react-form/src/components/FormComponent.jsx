import React from 'react'

const FormComponent = (props) => {
    const { setInputValue } = props;

    const handleInputValue = function (e) {
        e.preventDefault();
        setInputValue(e.target.name.value)
    }

    return (
        <div>
            <form onSubmit={handleInputValue} >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id='name' />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default FormComponent