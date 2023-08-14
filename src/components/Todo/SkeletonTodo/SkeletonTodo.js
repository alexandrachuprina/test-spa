import React from "react";
import { queries } from "../../../styles/UI-kit";
import { styled, keyframes } from "styled-components";

const SkeletonTodo = () => {
  return <Todo />;
};

export default SkeletonTodo;

const gradient = keyframes`
0% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}
`;

export const Todo = styled.div`
  ${(p) =>
    p.theme.black && {
      boxShadow: "none",
      border: `1px solid ${p.theme.primary}`,
      background:
        "linear-gradient(to right, var(--dark-bg), var(--bg), var(--dark-bg))",
    }}

  ${(p) =>
    p.theme.light && {
      background:
        "linear-gradient(to right, var(--medium-gray), var(--medium-gray), var(--white), var(--medium-gray), var(--medium-gray))",
    }}

  animation: ${gradient} 2s ease infinite;
  background-size: 200%;
  opacity: 0.5;

  display: flex;
  min-height: 60px;

  width: 100%;

  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
  cursor: pointer;

  @media (width <= ${queries.l}) {
    height: 60px;
  }
`;
