import { createStore} from 'redux';
import taskReducer from "./taskReducer"
import persistReducer from "./persistReducer"
 
export default createStore(persistReducer);