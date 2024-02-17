import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormProps } from '../../vite-env';
import './Form.css';

const Form: React.FC<FormProps> = ({onFormSubmit}) => {

    const[inputText, setInputText] = useState('');

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const onHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onFormSubmit(inputText);
        setInputText('');
    };

    return(
        <form className="container input-group mb-3" onSubmit={onHandleSubmit}>
            <input
                type="text" 
                className="form-control fs-5" 
                placeholder="New ToDo" 
                aria-label="New ToDo" 
                aria-describedby="toDo-form"
                value={inputText}
                onChange={onHandleChange}
            />
            <button type="submit" className="input-group-text bg-info fs-5" id="toDo-form">Add</button>
        </form>
    );
}

export default Form;