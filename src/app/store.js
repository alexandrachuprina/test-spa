import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import postsReducer from "./postsSlice";
import usersReducer from "./usersSlice";
import themeReducer from "./themeSlice";

import {
  watchFilterPosts,
  watchKeyword,
  watchMorePosts,
  watchPosts,
} from "../features/postsSaga";
import { watchUser, watchUsers } from "../features/usersSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    theme: themeReducer,
  },
  middleware: [saga],
});

saga.run(watchPosts);
saga.run(watchFilterPosts);
saga.run(watchKeyword);
saga.run(watchMorePosts);

saga.run(watchUsers)
saga.run(watchUser)
