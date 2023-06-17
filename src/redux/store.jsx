import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// slices
import quizReducer from "./slices/quizSlice";

const rootReducer = combineReducers({
  quiz: quizReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
