import { createStore,applyMiddleware,combineReducers } from "redux";
import counterReducer from "./couter/couterReducer";
import prodcutsReducer from "./products/productsReducer";
import logger from 'redux-logger'
import { composeWithDevTools } from "@redux-devtools/extension"

const reducer=combineReducers({products:prodcutsReducer,counter:counterReducer})
let store = createStore(reducer,composeWithDevTools(applyMiddleware(logger)));

export default store