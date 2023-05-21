import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 1,
  comments: [],
  isLoading: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getUserId: (state, action) => {
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

export const { getUserId, getComments, getCommentsSuccess } =
  commentsSlice.actions;

// export const id = state.comments.userId;
export const selectUserId = (state) => state.comments.userId;

export default commentsSlice.reducer;
