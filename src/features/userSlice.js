import { createSlice, current } from "@reduxjs/toolkit";

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
    setUserId: (state, action) => {
      state.id = action.payload;
      // console.log(action.payload);
    },
    getUsersData: (state) => {
      state.isLoading = true;
    },
    getUsersDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setUserData: (state, action) => {
      state.user = state.data.find((user) => user.id === action.payload);
      // console.log(current(state.user))
    }
  },
});

export const { setUserId, getUsersData, getUsersDataSuccess, setUserData} = userSlice.actions;

export const selectUserId = (state) => state.user.id;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;