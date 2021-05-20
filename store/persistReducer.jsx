import {persistReducer} from 'redux-persist'
//import storage from "redux-persist/lib/storage"
import AsyncStorage from '@react-native-async-storage/async-storage'
import taskReducer from "./taskReducer"

const persistConfig = {
    key: "root",
    storage : AsyncStorage,    
}
export default persistReducer(persistConfig,taskReducer);
