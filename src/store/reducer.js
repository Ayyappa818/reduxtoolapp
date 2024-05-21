import { combineReducers } from "redux";
import CounterReducer from "./counterreducer";
import TodolistReducer from "./todolistreducer";
import productsReducer from "./productsreducer";

const reducer=combineReducers({CounterReducer,TodolistReducer,productsReducer})
export default reducer