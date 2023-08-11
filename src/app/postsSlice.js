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
  isLoadingMore: false,
  start: 10,
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
      state.isLoadingMore = false;

      console.log("all posts");
      console.log(state.posts);
    },
    getPostsFailure: (state) => {
      state.isLoading = false;
    },
    getMorePosts: (state, action) => {
      console.log("loading more posts start");

      state.isLoadingMore = true;
      state.start = state.start + 10;
    },
    filterPosts: (state, action) => {
      console.log("filter posts by user start");

      state.isLoading = true;
      state.choosenUserId = action.payload;
    },
    filterPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.isLoadingMore = false;

      console.log("posts by user");
      console.log(state.posts);
    },
    filterByWord: (state, action) => {
      console.log("filter posts by word start");

      state.keyword = action.payload;
      state.choosenUserId = 0;
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
  getMorePosts,
  filterPosts,
  filterPostsSuccess,
  filterByWord,
  filterByWordSucces,
} = postsSlice.actions;

export const selectKeyword = (state) => state.posts.keyword;

export default postsSlice.reducer;
