import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice";
import commentsReducer from '../features/commentsSlice';

import createSagaMiddleware from "redux-saga";
import postsSaga from "../features/postsSaga";
import commentsSaga from "../features/commentsSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
  middleware: [saga],
});

saga.run(postsSaga);
saga.run(commentsSaga)
