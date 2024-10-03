import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import userReducer from "./slices/userSlice";
import { LoggerMiddleWare } from "../services/LoggerMiddleWare";
import themeReducer from './slices/themeSlice';
import registrationReducer from './slices/registrationSlice';


const store=configureStore({
    reducer:{
        users:usersReducer,
        user:userReducer,
        theme:themeReducer,
        registration:registrationReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(LoggerMiddleWare),
});


export default store;