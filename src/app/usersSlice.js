import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  choosenUserId: 0,
  isLoadingUser: true,
  userInfo: {},
  postsByUser: [],
  todosByUser: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      console.log("users loading start");

      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      console.log("all users");
      console.log(action.payload);

      state.users = action.payload;
      state.isLoading = false;
    },
    setUserId: (state, action) => {
      state.choosenUserId = action.payload;
    },
    getUserInfo: (state) => {
      console.log("get user info start");
      // state.isLoadingUser = true;
    },
    getUserInfoSuccess: (state, action) => {
      console.log(action.payload);
      state.userInfo = action.payload;
    },
    getPostsByUserSuccess: (state, action) => {
      console.log(action.payload);
      state.postsByUser = action.payload;

    },
    getTodosByUserSuccess: (state, action) => {
      state.todosByUser = action.payload;
      state.isLoadingUser = false;
    },
    setIsLoadingUser: (state) => {
      state.isLoadingUser = true;
    }
  },
});

export const {
  getUsers,
  getUsersSuccess,
  setUserId,
  getUserInfo,
  getUserInfoSuccess,
  getPostsByUserSuccess,
  getTodosByUserSuccess,
  setIsLoadingUser
} = usersSlice.actions;
export default usersSlice.reducer;
