import { put, call, takeEvery } from "redux-saga/effects";
import { getCommentsSuccess } from "./commentsSlice";
import { useSelector } from "react-redux";

function* sagaGetComments() {
  // const id = useSelector(() => state.comments.userId);
  // console.log("id");
  // console.log(id);

  const comments = yield call(() =>
    fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
  );
  const formattedComments = yield comments.json();
  // console.log("comments");
  yield put(getCommentsSuccess(formattedComments));
}

function* commentsSaga() {
  yield takeEvery("comments/getComments", sagaGetComments);
}

export default commentsSaga;
