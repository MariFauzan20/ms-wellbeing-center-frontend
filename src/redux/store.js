import { createStore, applyMiddleware, combineReducers } from "redux";
import questionReducer from "./reduces/questions.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  questionReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
