import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice";
import commentsReducer from "../features/commentsSlice";
import userReducer from "../features/userSlice";
import todosReducer from "../features/todosSlice";
import themeReducer from '../features/themeSlice'

import createSagaMiddleware from "redux-saga";
import postsSaga from "../features/postsSaga";
import commentsSaga from "../features/commentsSaga";
import usersSaga from "../features/usersSaga";
import todosSaga from "../features/todosSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
    todos: todosReducer,
    theme: themeReducer,
  },
  middleware: [saga],
});

saga.run(postsSaga);
saga.run(commentsSaga);
saga.run(usersSaga);
saga.run(todosSaga);
