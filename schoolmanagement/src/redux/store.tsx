import { configureStore } from "@reduxjs/toolkit";
import { userInfo, questionInfo } from "./reduxApi";

export const store = configureStore({
  reducer: {
    user: userInfo.reducer,
    question: questionInfo.reducer,
  },
});
