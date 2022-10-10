import React, { useState } from 'react';

const Form = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
    })
    const handleSubmit = (event) =>{ 
        event.preventDefault()
        console.log(formState);
    }
    const handleChange = (event) =>{
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            <h1>This is form page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >What is your name</label>
                    <input type="text" name='name' placeholder='what is your name' value={formState.name} onChange={handleChange}/>
                </div>
                <div>
                    <label >What is your name</label>
                    <input type="email" name='email' placeholder='what is your name' value={formState.email} onChange={handleChange}/>
                </div>
                <div>
                    <label >What is your name</label>
                    <input type="tel" name='phone' placeholder='what is your name' value={formState.phone} onChange={handleChange}/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;