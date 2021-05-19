import { ADD_TASK, DELETE_TASK, DID_TASK, SHOW,HIDE } from "./taskTypes";

const initState = {
    showModal : false,
    todos : [
        {"task": "주간회의", "done": true, "id":"1"},
        {"task": "메일확인", "done": false, "id":"2"},
        {"task": "근무일지작성", "done" : false, "id":"3"}
    ]
}

const taskReducer = (state=initState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return({
                ...state,                
                showModal:false,
                todos:[...state.todos, {
                    task:action.payload, done:false, id: Math.random().toString(),
                    }               
                ]
            });
        case DELETE_TASK:
            return ({
                ...state,
                todos: state.todos.filter(item=> item.id != action.payload)
            });
        case DID_TASK:
            console.log("test");
            return({
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id != action.payload){
                        return item
                    }else{
                        if(item.done === true){
                            return{
                                ...item,
                                done:false
                            }
                        }
                        return{
                            ...item,
                            done:true
                        }                    

                    }                    
                })
            });
        case SHOW:
            //console.log("test");
            return({
                ...state,
                showModal: true
            });
        case HIDE:
            return({
                ...state,
                showModal: false
            })        
        default:
           return state;
    }
    
}

export default taskReducer