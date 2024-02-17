/// <reference types="vite/client" />

declare module 'uuid';
declare module 'bootstrap/dist/js/bootstrap.bundle.min.js';

type ToDo = {id: string, isFinished: boolean, text: string};

export interface FormProps {
    onFormSubmit: (string) => void;
}
export interface ToDoListProps {
    toDos: Array<ToDo>;
}
export interface ToDoProps {
    toDo: ToDo;
}