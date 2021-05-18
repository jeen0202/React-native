import { createStore} from 'redux';
import taskReducer from "./taskReducer"
 
// store.subscribe(() => 
//     console.log(store.getState())
// )
export default createStore(taskReducer);