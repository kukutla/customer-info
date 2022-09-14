// configurestore from redux-toolkit

import { configureStore } from "@reduxjs/toolkit";
import  createSagaMiddleware from '@redux-saga/core';
import rootReducer from './rootReducer';
import rootSaga from "./rootSaga";

//sagamiddleware
let sagamiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleWare)=>[...getDefaultMiddleWare({thunk:false,serializableCheck:false}),
    sagamiddleware,
    ],
});

//run your rootsaga
sagamiddleware.run(rootSaga)

export default store;