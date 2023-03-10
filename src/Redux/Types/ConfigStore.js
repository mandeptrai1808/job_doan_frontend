import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { UserReducer } from "../Reducers/UserReducer";
const rootReducer = combineReducers({
    UserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));