import { put, call, takeEvery, select, delay } from "redux-saga/effects";
import { getCommentsSuccess, selectUserId } from "./commentsSlice";

function* sagaGetComments() {
  // const id = yield select(selectUserId);
  const comments = yield call(() =>
    fetch(`https://jsonplaceholder.typicode.com/comments`)
  );
  const formattedComments = yield comments.json();
  yield put(getCommentsSuccess(formattedComments));
}

function* commentsSaga() {
  yield takeEvery("comments/getComments", sagaGetComments);
}

export default commentsSaga;
