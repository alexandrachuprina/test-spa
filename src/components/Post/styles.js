import { styled, keyframes } from "styled-components";
import css from "styled-components";
import { queries } from "../../styles/UI-kit";

const loading = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Card = styled.div`
  animation: 1s ${loading};

  ${(p) =>
    p.theme.black && {
      boxShadow: "none",
      border: `1px solid ${p.theme.primary}`,
    }}

  h2 {
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    color: ${(p) => p.theme.primaryMedium};
  }
  .user {
    color: ${(p) => p.theme.primaryLight};
  }

  ${(props) =>
    props.view === "large" &&
    `
      height: 400px;

      background-color: transparent;
      height: fit-content;
      border-radius: 18px;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: scale 0.5s, box-shadow 0.5s;
      cursor: pointer;

      h2 {
        font-size: 24px;
      }
      .user {
        margin-left: 6px;
      }
      .text {
        &::first-letter {
          text-transform: uppercase;
        }
      }
      .comments {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 20px;
        border-top: 1px solid #d8d8d8;
        padding-top: 20px;

        @media (width < ${queries.sm}) {
          flex-direction: column;
        }
      }

      &:hover {
        scale: 1.05;
      }

      @media (width <= ${queries.l}) {
        width: 100%;
        h2 {
          font-size: 18px;
        }
        p {
          font-size: 12px;
        }
      }

      @media (${queries.l} < width < ${queries.xxl}) {
        width: auto;
      }

    `}

  ${(props) =>
    props.view === "small" &&
    `
      display: flex;
      width: 100%;
      
      background-color: transparent;
      border-radius: 18px;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
      padding: 18px;
      flex-direction: column;
      justify-content: space-between;
      transition: scale 0.5s, box-shadow 0.5s;
      cursor: pointer;

      h2 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
      .text {
        &::first-letter {
          text-transform: uppercase;
        }
      }
      .user {
        margin-left: 6px;
      }
      .comments {
        display: none;
      }

      @media (width <= ${queries.l}) {
        width: 100%;
        p {
          font-size: 12px;
        }
        min-height: auto;
        height: fit-content;
      }
      @media (${queries.l} < width < ${`1200px`}) {
        height: 320px;
      }
    `}

  ${(props) =>
    props.view === "list" &&
    `
      display: flex;
      width: 100%;
      height: fit-content;

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
      border-radius: 18px;
      padding: 18px;

      h2 {
        font-size: 18px;
      }
      p {
        font-size: 12px;
      }
      .content {
        width: 70%;
      }
      .user {
        margin-left: 3px;
      }
      .text {
        &::first-letter {
          text-transform: uppercase;
        }
      }
      .comments {
        display: none;
      }

      @media (width <= ${queries.sm}) {
        flex-direction: column;
        align-items: flex-start;
        .content {
          width: 100%;
        }
      }
    `}
`;
