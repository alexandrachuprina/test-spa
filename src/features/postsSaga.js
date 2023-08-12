import {
  put,
  call,
  takeEvery,
  all,
  select,
  takeLatest,
} from "redux-saga/effects";
import {
  filterByWordSucces,
  filterPostsSuccess,
  getPostsSuccess,
} from "../app/postsSlice";
import axios from "axios";

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

function* getUsers(posts) {
  const users = [];
  for (let i = 0; i < posts.length; i++) {
    const userId = posts[i].userId;
    const data = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    );
    users.push(yield data.data);
  }

  return users;
}

function createCards(posts, comments, users) {
  let postCards = [];

  for (let i = 0; i < posts.length; i++) {
    let postCard = {
      post: {},
      comments: [],
      user: "",
    };

    const post = posts[i];
    postCard.post = post;

    const comment = comments[i];
    postCard.comments = comment;

    const user = users[i];
    const name = user[0].name;
    postCard.user = name;

    postCards = [...postCards, postCard];
  }

  return postCards;
}

function* getPosts() {
  const posts = yield call(() =>
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  );
  const formattedPosts = yield posts.data;

  const comments = yield getComments(formattedPosts);
  const users = yield getUsers(formattedPosts);
  const postCards = yield createCards(formattedPosts, comments, users);

  yield put(getPostsSuccess(postCards));

  console.log(postCards);
}

export function* watchPosts() {
  yield takeEvery("posts/getPosts", getPosts);
}

function* filterPosts() {
  const user = yield select((state) => state.posts.choosenUserId);
  let posts;
  if (user === 0) {
    posts = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    );
  } else {
    posts = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user}`)
    );
  }
  const formattedPosts = yield posts.data;

  const comments = yield getComments(formattedPosts);
  const users = yield getUsers(formattedPosts);
  const postCards = yield createCards(formattedPosts, comments, users);

  yield put(filterPostsSuccess(postCards));
}

export function* watchFilterPosts() {
  yield takeEvery("posts/filterPosts", filterPosts);
}

function* searchWord() {
  const keyword = yield select((state) => state.posts.keyword);
  let posts;
  if (keyword === "") {
    posts = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    );
  } else {
    posts = yield call(() =>
      axios.get(
        `https://jsonplaceholder.typicode.com/posts?body_like=${keyword}&_limit=10`
      )
    );
  }
  const formattedPosts = yield posts.data;

  const comments = yield getComments(formattedPosts);
  const users = yield getUsers(formattedPosts);
  const postCards = yield createCards(formattedPosts, comments, users);

  yield put(filterByWordSucces(postCards));
}

export function* watchKeyword() {
  yield takeLatest("posts/filterByWord", searchWord);
}

function* getMorePosts() {
  const start = yield select((state) => state.posts.start);
  const keyword = yield select((state) => state.posts.keyword);
  let newPosts;
  if (keyword === "") {
    newPosts = yield call(() =>
      axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`
      )
    );
  } else {
    newPosts = yield call(() =>
      axios.get(
        `https://jsonplaceholder.typicode.com/posts?body_like=${keyword}&_start=${start}&_limit=10`
      )
    );
  }
  const formattedPosts = yield newPosts.data;

  const comments = yield getComments(formattedPosts);
  const users = yield getUsers(formattedPosts);
  const postCards = yield createCards(formattedPosts, comments, users);

  const prevPosts = yield select((state) => state.posts.posts);

  console.log(prevPosts);

  const newCards = [...prevPosts, ...postCards];

  console.log(newCards);

  yield put(getPostsSuccess(newCards));
}

export function* watchMorePosts() {
  yield takeEvery("posts/getMorePosts", getMorePosts);
}
