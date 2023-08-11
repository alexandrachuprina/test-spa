import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: {
    black: "true",
    main: "var(--bg)",
    primary: "var(--light)",
    primaryLight: "var(--white)",
    primaryMedium: "var(--medium-light)",
    bg: "var(--bg)",
    darkBg: "var(--dark-bg)",
    boxShadow: "none",
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.theme = {
        black: true,
        main: "var(--bg)",
        primary: "var(--light)",
        primaryLight: "var(--white)",
        primaryMedium: "var(--medium-light)",
        bg: "var(--bg)",
        darkBg: "var(--dark-bg)",
        boxShadow: "none",
      };
    },
    setLightTheme: (state) => {
      state.theme = {
        black: false,
        main: "var(--white)",
        primary: "var(--black)",
        primaryLight: "var(--black)",
        bg: "transparent",
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`,
      };
    },
    setThemeCustom: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setDarkTheme, setLightTheme, setThemeCustom } =
  themeSlice.actions;
export default themeSlice.reducer;
