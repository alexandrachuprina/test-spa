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
      // console.log(action.payload)  WORKS
    },
    getComments: (state) => {
      state.isLoading = true;
      // console.log('getComments') WORKS
    },
    getCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
      console.log(action.payload)
    },
  },
});

export const { getUserId, getComments, getCommentsSuccess } =
  commentsSlice.actions;

// export const id = state.comments.userId;
export const selectUserId = (state) => state.comments.userId;

export default commentsSlice.reducer;
