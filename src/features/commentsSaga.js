import { put, call, takeEvery, select } from "redux-saga/effects";
import { getCommentsSuccess, selectUserId } from "./commentsSlice";

function* sagaGetComments() {
  const id = yield select(selectUserId);
  const comments = yield call(() =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  );
  const formattedComments = yield comments.json();
  yield put(getCommentsSuccess(formattedComments));
}

function* commentsSaga() {
  yield takeEvery("comments/getComments", sagaGetComments);
}

export default commentsSaga;
