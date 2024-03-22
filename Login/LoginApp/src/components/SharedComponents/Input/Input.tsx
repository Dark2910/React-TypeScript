import './Input.css';

const Input = (props:InputProps) => {
    return(
        <input className={props.className} 
            type={props.type} 
            name={props.name} 
            placeholder={props.placeholder} 
            value={props.value} 
            onChange={props.onChange} 
            required 
        />
    );
}

export default Input;