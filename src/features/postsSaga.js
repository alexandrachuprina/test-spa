import { put, call, takeEvery } from "redux-saga/effects";
import { getPostsSuccess } from "./postsSlice";
import axios from "axios";

function* sagaGetPosts() {
  const posts = yield call(() =>
    axios.get("https://jsonplaceholder.typicode.com/posts?limit=10")
  );
  const formattedPosts = yield posts.data;
  yield put(getPostsSuccess(formattedPosts));
}

function* postsSaga() {
  yield takeEvery("posts/getPosts", sagaGetPosts);
}

export default postsSaga;
