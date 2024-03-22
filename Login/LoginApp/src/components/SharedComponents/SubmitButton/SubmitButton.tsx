import './SubmitButton.css';

const SubmitButton = (props:SubmitButtonProps) => {
    return (
        <button className={props.className} type="submit">
            <span>{props.label}</span>
        </button>
    );
}

export default SubmitButton;