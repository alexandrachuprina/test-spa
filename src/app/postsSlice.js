import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      post: {},
      comments: [{}],
      user: "",
    },
  ],
  isLoading: false,
  choosenUserId: 0,
  keyword: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      console.log("loading posts start");

      state.isLoading = true;
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;

      console.log("all posts");
      console.log(state.posts);
    },
    getPostsFailure: (state) => {
      state.isLoading = false;
    },
    filterPosts: (state, action) => {
      console.log("filter posts by user start");

      state.isLoading = true;
      state.choosenUserId = action.payload;
    },
    filterPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;

      console.log("posts by user");
      console.log(state.posts);
    },
    filterByWord: (state, action) => {
      console.log("filter posts by word start");
      state.keyword = action.payload;
      state.isLoading = true;
    },
    filterByWordSucces: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;

      console.log("posts with keyword");
      console.log(state.posts);
    },
  },
});

export const {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  filterPosts,
  filterPostsSuccess,
  filterByWord,
  filterByWordSucces,
} = postsSlice.actions;

export const selectKeyword = (state) => state.posts.keyword;

export default postsSlice.reducer;
