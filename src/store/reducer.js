import { combineReducers } from "redux";
import CounterReducer from "./counterreducer";
import TodolistReducer from "./todolistreducer";
import productsReducer from "./productsreducer";
import CountriesReducer from "./countriesreducer";
const reducer=combineReducers({CounterReducer,TodolistReducer,productsReducer,CountriesReducer})
export default reducer