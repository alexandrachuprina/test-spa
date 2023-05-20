import { put, call, takeEvery } from "redux-saga/effects";
import { getPostsSuccess } from "./postsSlice";

function* sagaGetPosts() {
  const posts = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/posts?limit=10")
  );
  const formattedPosts = yield posts.json();
  yield put(getPostsSuccess(formattedPosts))
}

function* postsSaga() {
  yield takeEvery('posts/getPosts', sagaGetPosts);
}

export default postsSaga;
