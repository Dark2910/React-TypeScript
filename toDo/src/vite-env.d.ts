/// <reference types="vite/client" />

declare module 'uuid';
declare module 'bootstrap/dist/js/bootstrap.bundle.min.js';

export type ToDoType = {id: string, isFinished: boolean, text: string};

export interface FormProps {
    formSubmit: (string) => void,
}
export interface ToDoProps {
    toDo: ToDoType,
    handleStatus: (string) => void,
    handleDelete: (string) => void,
}