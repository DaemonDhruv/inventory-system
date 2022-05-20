import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers";
import { persistStore } from "redux-persist";

const initialState = {};

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export default { store, persistor };
