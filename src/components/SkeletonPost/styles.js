import { keyframes, styled } from "styled-components";
import { queries, skeletonGradient } from "../../styles/UI-kit";

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
    }}

  animation: ${gradient} 2s linear infinite;
  background: linear-gradient(
    to right,
    var(--medium-gray),
    var(--white),
    var(--medium-gray)
  );
  background-size: 200%;
  opacity: 0.5;

  ${(props) =>
    props.view === "large" &&
    `
      display: flex;
      width: 700px;
      height: 400px;

      background-color: transparent;
      border-radius: 18px;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
      cursor: pointer;
    `}

  ${(props) =>
    props.view === "small" &&
    `
      display: flex;
      width: 320px;
      height: 260px;
      
      background-color: transparent;
      border-radius: 18px;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
      cursor: pointer;

      @media (width < ${queries.sm}) {
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
      width: 720px;
      height: 140px;

      flex-direction: row;
      justify-content: space-between;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
      align-items: flex-end;
      border-radius: 18px;
      padding: 18px;

      @media (width <= ${queries.xl}) {
        width: 100%;
        flex-direction: column;
        .content {
          width: 100%;
        }
      }
    `}
`;
