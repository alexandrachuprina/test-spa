import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import postsReducer from "./postsSlice";
import themeReducer from "../features/themeSlice";

import { watchFilterPosts, watchKeyword, watchPosts } from "../features/postsSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer,
  },
  middleware: [saga],
});

saga.run(watchPosts);
saga.run(watchFilterPosts);
saga.run(watchKeyword)