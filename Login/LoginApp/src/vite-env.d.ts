/// <reference types="vite/client" />

interface LabelProps{
    htmlFor: string,
    text: string
}

interface InputProps {
    className: string,
    type: string,
    idInput?: string,
    name: string,
    placeholder?: string,
    value: string,
    onChange: (event: FormEvent<HTMLFormElement>) => void,
    isRequired: boolean
}

interface SubmitButtonProps {
    className: string
    label: string
}

interface UserData {
    firstName?: string,
    lastName?: string,
    birthday?: string,
    userName?: string,
    email: string,
    password: string
}
