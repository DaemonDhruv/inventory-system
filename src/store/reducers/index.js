import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"
import reducerManage from "./reducerManage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['manage']
}

const appReducer = combineReducers({
    manage: reducerManage
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default persistReducer(persistConfig, rootReducer);