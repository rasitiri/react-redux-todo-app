import { createStore, combineReducers } from "redux";
import todoReducer from "./modules/todo";

const reducer = combineReducers({
    todoReducer,
});

const configureStore = (initialState) => createStore(reducer, initialState);
export default configureStore;
