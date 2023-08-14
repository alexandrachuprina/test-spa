import { styled, keyframes } from "styled-components";
import { queries } from "../../../styles/UI-kit";

const gradient = keyframes`
0% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}
`;

export const Card = styled.div`
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

  width: 390px;
  height: 450px;
  border-radius: 18px;
  padding: 24px 36px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;

  z-index: 1;

  ${(p) =>
    p.theme.black && {
      border: `1px solid ${p.theme.primary}`,
      boxShadow: "none",
    }}

  @media (width <= ${queries.sm}) {
    position: relative;
    width: 100%;
    height: 500px;
  }
`;
