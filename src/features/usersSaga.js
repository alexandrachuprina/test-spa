import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersDataSuccess } from "./userSlice";
import axios from "axios";

function* sagaGetUsers() {
  const data = yield call(() =>
    axios.get(`https://jsonplaceholder.typicode.com/users`)
  );
  const formattedData = yield data.data;
  yield put(getUsersDataSuccess(formattedData));
}

function* usersSaga() {
  yield takeEvery("user/getUsersData", sagaGetUsers);
}

export default usersSaga;
