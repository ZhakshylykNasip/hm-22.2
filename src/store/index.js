import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer, authSlice } from "./auth/authSlice";
import { todoReducer, todoSlice } from "./todo/todoSlice";
import { calculatorSlice } from "./calculator/calculatorSlice";

const rootReducer = combineReducers({
  [todoSlice.name]: todoReducer,
  [authSlice.name]: authReducer,
  [calculatorSlice.name]: calculatorSlice.reducer,

});

export const store = configureStore({ reducer: rootReducer });
