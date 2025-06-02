import React, { useState } from 'react'

function NameInputForm() {
    const [Form, stateForm] = useState('')
    
    const handleChange = (event) => {
        const updatedForm = event.target.value
        stateForm(updatedForm)
    }

    return (
        <>
            <form>
                <input type='text' value={Form} onChange={handleChange}/>
            </form>
            <p>Hello, {Form} </p>
        
        </>
    )
}

export default NameInputForm;

