import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import UserSlice from "./UserSlice"; 

const rootReducer =combineReducers({
    auth: UserSlice
})

const persistConfig ={
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store =configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(Store)
export default Store