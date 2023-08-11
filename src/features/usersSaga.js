import {
  put,
  call,
  takeEvery,
  all,
  select,
  takeLatest,
} from "redux-saga/effects";
import {
  getPostsByUserSuccess,
  getTodosByUserSuccess,
  getUserInfoSuccess,
  getUsersSuccess,
} from "../app/usersSlice";
import axios from "axios";

function* getUsers() {
  const users = yield call(() =>
    axios.get(`https://jsonplaceholder.typicode.com/users`)
  );
  const formattedUsers = yield users.data;

  // console.log(formattedUsers)

  yield put(getUsersSuccess(formattedUsers));
}

export function* watchUsers() {
  yield takeEvery("users/getUsers", getUsers);
}

function* getPostsByUser(id) {
  const posts = yield call(() =>
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  );
  const formattedPosts = yield posts.data;

  return formattedPosts;
}

function* getComments(posts) {
  const comments = [];
  for (let i = 0; i < posts.length; i++) {
    const postId = posts[i].id;
    const data = yield call(() =>
      axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      )
    );
    comments.push(yield data.data);
  }

  return comments;
}

function createCards(posts, comments) {
  let postCards = [];

  for (let i = 0; i < posts.length; i++) {
    let postCard = {
      post: {},
      comments: [],
    };

    const post = posts[i];
    postCard.post = post;

    const comment = comments[i];
    postCard.comments = comment;

    postCards = [...postCards, postCard];
  }

  return postCards;
}

function* getTodos(id) {
  const todos = yield call(() =>
    axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
  );
  const formattedTodos = yield todos.data;

  return formattedTodos;
}

function* getUser() {
  const id = yield select((state) => state.users.choosenUserId);
  const user = yield call(() =>
    axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
  );
  const formattedUser = yield user.data;

  const posts = yield getPostsByUser(id);
  yield put(getUserInfoSuccess(formattedUser));

  const comments = yield getComments(posts);
  const postCards = yield createCards(posts, comments);
  yield put(getPostsByUserSuccess(postCards));

  const todos = yield getTodos(id);
  yield put(getTodosByUserSuccess(todos));
}

export function* watchUser() {
  yield takeEvery("users/getUserInfo", getUser);
}
