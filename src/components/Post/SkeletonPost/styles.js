import { keyframes, styled } from "styled-components";
import { queries, skeletonGradient } from "../../../styles/UI-kit";

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

  ${(props) =>
    props.view === "large" &&
    `
      display: flex;
      height: 400px;
      width: 100%;

      background-color: transparent;
      border-radius: 18px;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
      cursor: pointer;
    `}

  ${(props) =>
    props.view === "small" &&
    `
      display: flex;
      height: 260px;
      width: 100%;
      
      background-color: transparent;
      border-radius: 18px;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
      cursor: pointer;

      @media (width < ${queries.l}) {
        p {
          font-size: 12px;
        }
        min-height: auto;
        height: fit-content;
      }
    `}

  ${(props) =>
    props.view === "list" &&
    `
      display: flex;
      height: 70px;
      width: 100%;

      flex-direction: row;
      justify-content: space-between;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
      align-items: flex-end;
      border-radius: 18px;
      padding: 18px;

      @media (width <= ${queries.xl}) {
        flex-direction: column;
        .content {
          width: 100%;
        }
      }
    `}
`;
