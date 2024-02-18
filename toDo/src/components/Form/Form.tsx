import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormProps } from '../../vite-env';
import './Form.css';

const Form: React.FC<FormProps> = ({formSubmit}) => {

    const[inputText, setInputText] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        formSubmit(inputText);
        setInputText('');
    };

    return(
        <form className="container input-group mb-3" onSubmit={handleSubmit}>
            <input
                type="text" 
                className="form-control fs-5" 
                placeholder="New ToDo" 
                aria-label="New ToDo" 
                aria-describedby="toDo-form"
                value={inputText}
                onChange={handleChange}
            />
            <button type="submit" className="input-group-text bg-info fs-5" id="toDo-form">Add</button>
        </form>
    );
}

export default Form;