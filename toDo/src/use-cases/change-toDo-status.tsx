import { ToDoType } from "../vite-env"

const changeToDoStatus = (id: string, toDos: Array<ToDoType>) => {
    const updateToDos = toDos.map((toDo) => {
        if (toDo.id === id) {
            toDo.isFinished = !toDo.isFinished;
        }
        return toDo;
    })
    return updateToDos;
}

export default changeToDoStatus;