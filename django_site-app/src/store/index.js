import { createStore, combineReducers, applyMiddleware } from "redux";
import itemReducer from "./itemReducer"
import sessionReducer from "./sessionReducer";
import orderReducer from "./orderReducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    item: itemReducer,
    sessionId: sessionReducer,
    order: orderReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))