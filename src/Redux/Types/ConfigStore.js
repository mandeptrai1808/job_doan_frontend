import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { UserReducer } from "../Reducers/UserReducer";
import { ThucDonReducer } from "../Reducers/ThucDonReducer";
import { ManagerReducer } from "../Reducers/ManagerReducer.js";
import { ModalReducer } from "../Reducers/ModalReducer";
const rootReducer = combineReducers({
    UserReducer,
    ThucDonReducer,
    ManagerReducer,
    ModalReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));