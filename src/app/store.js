import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice";

import createSagaMiddleware from "redux-saga";
import postsSaga from "../features/postsSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: [saga],
});

saga.run(postsSaga);
