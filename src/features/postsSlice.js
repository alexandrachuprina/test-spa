import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  isLoading: false,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.isLoading = true;
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsFailure: (state) => {
      state.isLoading = false;
    },
  },
})

export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions;

export default postsSlice.reducer;