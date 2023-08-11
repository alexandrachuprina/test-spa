import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from "../../app/themeSlice";

import { Nav, Icons, Icon } from "./styles";
import { sunOutline } from "../../assets/theme/sunOutline";
import { sunFilled } from "../../assets/theme/sunFilled";
import { moonFilled } from "../../assets/theme/moonFilled";
import { moonOutline } from "../../assets/theme/moonOutline";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <Nav>
      <div className="nav-items">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Главная
        </NavLink>

        <NavLink
          to="users"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          // onClick={() => dispatch(filterByWord(""))}
        >
          Все авторы
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          О проекте
        </NavLink>
      </div>
      <Icons>
        {theme.black && (
          <>
            <Icon onClick={() => dispatch(setLightTheme())}>{sunOutline}</Icon>
            <Icon onClick={() => dispatch(setLightTheme())}>{moonFilled}</Icon>
          </>
        )}

        {!theme.black && (
          <>
            <Icon onClick={() => dispatch(setDarkTheme())}>{sunFilled}</Icon>
            <Icon onClick={() => dispatch(setDarkTheme())}>{moonOutline}</Icon>
          </>
        )}
      </Icons>
    </Nav>
  );
};

export default Navbar;
