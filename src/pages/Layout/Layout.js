import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PagesWrapper, NavWrapper } from "./styles";

import Navbar from "../../components/Navbar/Navbar";

function Layout() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <NavWrapper>
        <Navbar />
      </NavWrapper>

      <PagesWrapper theme={theme}>
        <Outlet />
      </PagesWrapper>
    </ThemeProvider>
  );
}

export default Layout;
