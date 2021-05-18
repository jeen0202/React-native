import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import taskReducer from "./taskReducer"

const store = createStore(taskReducer,devToolsEnhancer())
store.subscribe(() => 
    console.log(store.getState())
)
export default store