import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage"
import taskReducer from "./taskReducer"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["taskReducer"]
}
export default persistReducer(persistConfig,taskReducer);
