import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersDataSuccess } from "./userSlice";

function* sagaGetUsers() {
  const data = yield call(() =>
    fetch(`https://jsonplaceholder.typicode.com/users`)
  );
  const formattedData = yield data.json();
  // console.log(formattedData);
  yield put(getUsersDataSuccess(formattedData));
}

function* usersSaga() {
  yield takeEvery("user/getUsersData", sagaGetUsers);
}

export default usersSaga;
