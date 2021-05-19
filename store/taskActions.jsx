import { ADD_TASK, DELETE_TASK, DID_TASK, SHOW,HIDE } from "./taskTypes"

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
export const handleModal = ()=> ({
    type : SHOW
})
export const hideModal = () => ({
    type : HIDE
})