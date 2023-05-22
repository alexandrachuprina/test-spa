import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postId: 1,
  comments: [],
  isLoading: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getPostId: (state, action) => {
      state.userId = action.payload;
    },
    getComments: (state) => {
      state.isLoading = true;
    },
    getCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getPostId, getComments, getCommentsSuccess } =
  commentsSlice.actions;

export const selectUserId = (state) => state.comments.userId;

export default commentsSlice.reducer;
