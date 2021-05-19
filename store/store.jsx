import { createStore} from 'redux';
import taskReducer from "./taskReducer"
 
export default createStore(taskReducer);