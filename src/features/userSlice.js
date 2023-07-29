import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  isLoading: false,
  data: [],
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersData: (state) => {
      state.isLoading = true;
    },
    getUsersDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    setUserData: (state, action) => {
      state.user = state.data.find((user) => user.id === action.payload);
    },
  },
});

export const { setUserId, getUsersData, getUsersDataSuccess, setUserData } =
  userSlice.actions;

export const selectUserId = (state) => state.user.id;
export const selectUser = (state) => state.user.user;
export const selectUsersData = (state) => state.user.data;

export default userSlice.reducer;
