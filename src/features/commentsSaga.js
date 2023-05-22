import { put, call, takeEvery } from "redux-saga/effects";
import { getCommentsSuccess } from "./commentsSlice";
import axios from "axios";

function* sagaGetComments() {
  const comments = yield call(() =>
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
  );
  const formattedComments = yield comments.data;
  yield put(getCommentsSuccess(formattedComments));
}

function* commentsSaga() {
  yield takeEvery("comments/getComments", sagaGetComments);
}

export default commentsSaga;
