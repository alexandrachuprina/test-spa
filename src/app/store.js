import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice";
import commentsReducer from '../features/commentsSlice';
import userReducer from '../features/userSlice';

import createSagaMiddleware from "redux-saga";
import postsSaga from "../features/postsSaga";
import commentsSaga from "../features/commentsSaga";
import usersSaga from "../features/usersSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
  },
  middleware: [saga],
});

saga.run(postsSaga);
saga.run(commentsSaga);
saga.run(usersSaga);
