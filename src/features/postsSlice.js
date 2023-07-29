import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  afterFilter: [],
  userId: 0,
  keyword: "",
  isLoading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.isLoading = true;
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.afterFilter = action.payload;
      state.isLoading = false;
    },
    getPostsFailure: (state) => {
      state.isLoading = false;
    },
    filterPosts: (state, action) => {
      if (action.payload != "") {
        if (state.keyword != "") {
          state.userId = action.payload;
          const newPosts = [];
          const postsByUser = (state.afterFilter = state.posts.filter(
            (post) => post.userId === action.payload
          ));

          for (let i = 0; i < postsByUser.length; i++) {
            if (postsByUser[i].body.indexOf(state.keyword) != -1) {
              newPosts.push(postsByUser[i]);
            }
          }
          state.afterFilter = newPosts;
        } else {
          state.userId = action.payload;
          state.afterFilter = state.posts.filter(
            (post) => post.userId === action.payload
          );
        }
      } else {
        if (state.keyword != "") {
          state.userId = 0;
          const newPosts = [];
          for (let i = 0; i < state.posts.length; i++) {
            if (state.posts[i].body.indexOf(state.keyword) != -1) {
              newPosts.push(state.posts[i]);
            }
          }
          state.afterFilter = newPosts;
        } else {
          state.userId = 0;
          state.afterFilter = state.posts;
        }
      }
    },
    filterByWord: (state, action) => {
      if (action.payload != "") {
        state.keyword = action.payload;
        const newPosts = [];
        if (state.userId != 0) {
          const postsByUser = state.posts.filter(
            (post) => post.userId === state.userId
          );
          for (let i = 0; i < postsByUser.length; i++) {
            if (postsByUser[i].body.indexOf(action.payload) != -1) {
              newPosts.push(postsByUser[i]);
            }
          }
          state.afterFilter = newPosts;
        } else {
          for (let i = 0; i < state.afterFilter.length; i++) {
            if (state.afterFilter[i].body.indexOf(action.payload) != -1) {
              newPosts.push(state.afterFilter[i]);
            }
          }
          state.afterFilter = newPosts;
        }
      } else {
        state.keyword = "";
        if (state.userId != 0) {
          state.afterFilter = state.posts.filter(
            (post) => post.userId === state.userId
          );
        } else {
          state.afterFilter = state.posts;
        }
      }
    },
  },
});

export const {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  filterPosts,
  filterByWord,
} = postsSlice.actions;

export const selectKeyword = (state) => state.posts.keyword;

export default postsSlice.reducer;
