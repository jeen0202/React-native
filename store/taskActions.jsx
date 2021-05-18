import { ADD_TASK, DELETE_TASK, DID_TASK, SHOW } from "./taskTypes"

export const addTask = (todos) => ({
    type: ADD_TASK,
    payload : todos
})

export const deleteTask = (id) => ({
    type : DELETE_TASK,
    payload : id
})

export const didTask = (id) => ({
    type: DID_TASK,
    payload : id
})
export const showModal = ()=> ({
    type : SHOW
})