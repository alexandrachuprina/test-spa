import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";
import { styled, ThemeProvider } from "styled-components";
import { setDarkTheme, setLightTheme } from "../../features/themeSlice";
import { queries } from "../../styles/UI-kit";

function Layout() {
  const [dark, setDark] = useState(true);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dark) {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
  }, [dark]);

  return (
    <ThemeProvider theme={theme}>
      <NavWrapper>
        <Nav dark={dark}>
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
            {dark && (
              <>
                <Icon onClick={() => setDark(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="var(--white)"
                    class="bi bi-brightness-high"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                </Icon>
                <Icon onClick={() => setDark(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="var(--white)"
                    class="bi bi-moon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                  </svg>
                </Icon>
              </>
            )}

            {!dark && (
              <>
                <Icon onClick={() => setDark(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-brightness-high-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                </Icon>
                <Icon onClick={() => setDark(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-moon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                  </svg>
                </Icon>
              </>
            )}
          </Icons>
        </Nav>
      </NavWrapper>

      <Wrapper theme={theme}>
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;

const Nav = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px 0 100px;

  a {
    padding: 0;
    color: ${(p) => p.theme.primary};
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    margin: 0 20px 0 0;
    border-bottom: 1px solid ${(p) => p.theme.main};
  }

  .active {
    color: ${(p) => p.theme.primaryLight};
    border-bottom: 1px solid ${(p) => p.theme.primaryLight};
    transition: color 0.5s, border-bottom 0.5s;
  }

  ${(p) =>
    p.dark && {
      borderBottom: `1px solid ${p.theme.primary}`,
    }}

  @media (width < ${queries.xs}) {
    padding: 0 20px;
    height: 100px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    a {
      font-size: 14px;
    }
  }
  @media (width > ${queries.xxs}) {
    a {
      font-size: 18px;
    }
  }
  @media (${queries.xxs} <= width <= ${`425px`}) {
    .nav-items {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media (${queries.xs} < width < ${queries.sm}) {
    justify-content: flex-start;
  }
  @media (${queries.sm} <= width <= ${queries.l}) {
    height: 80px;
    padding: 0 80px;
  }
  @media (${queries.xl} <= width) {
    max-width: 1600px;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--medium-gray);
  padding: 6px 10px;

  @media (width <= ${queries.xs}) {
    align-self: flex-start;
  }
`;

const Icon = styled.div`
  margin: 0 12px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  padding-top: 60px;
  box-sizing: border-box;
  z-index: -1;
  min-height: 92vh;
  height: fit-content;

  background-color: ${(p) => p.theme.bg};

  @media (${queries.xxs} <= width < ${queries.sm}) {
    min-height: 87vh;
  }

  @media (${queries.xl} <= width) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NavWrapper = styled.div`
  background-color: ${(p) => p.theme.darkBg};
  box-shadow: 0 4px 16px #00000014, 0 0 16px #0000;

  ${(p) =>
    p.dark && {
      borderBottom: `1px solid ${p.theme.primary}`,
    }}

  @media (width < ${queries.sm}) {
    padding-top: 20px;
  }
  @media (${queries.xl} <= width) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
