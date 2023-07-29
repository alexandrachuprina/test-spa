import { call, put, takeEvery } from "redux-saga/effects";
import { getTodosSuccess } from './todosSlice'
import axios from "axios";

function* sagaGetTodos() {
  const todos = yield call(() =>
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
  );
  const formattedData = yield todos.data;
  yield put(getTodosSuccess(formattedData));
}

function* todosSaga() {
  yield takeEvery("todos/getTodos", sagaGetTodos);
}

export default todosSaga;
