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
      // console.log(action.payload) WORKS
    },
  },
});

export const { getUserId, getComments, getCommentsSuccess } =
  commentsSlice.actions;

export default commentsSlice.reducer;
