import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import GerArticlesReducer from "./reducesr/GerArticlesReducer";

const RootReducer=combineReducers({
    GerArticlesReducer
})

export const store=createStore(RootReducer,applyMiddleware(thunk));

export type AppDispatch=typeof store.dispatch
export type AppRootType=ReturnType<typeof store.getState>