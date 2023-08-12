import { styled } from "styled-components";
import css from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Card = styled.div`
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
      width: 100%;
      min-height: 300px;
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

      @media (width <= ${queries.sm}) {
        h2 {
          font-size: 18px;
        }
        p {
          font-size: 12px;
        }
      }
    `}

  ${(props) =>
    props.view === "small" &&
    `
      min-height: 250px;
      height: 250px;
      
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
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      border-radius: 18px;
      padding: 18px;

      h2 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
      .content {
        width: 65%;
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

      @media (width <= ${queries.xl}) {
        width: 100%;
        flex-direction: column;
        .content {
          width: 100%;
        }
      }
    `}
`;

export const BasicBtn = styled.button`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 6px 12px;
  width: fit-content;
  border-radius: 999px;
  p {
    font-size: 16px;
    color: ${(p) => p.theme.primary};
    padding: 0 10px;
    margin: 0;
  }
`;

export const AuthorsCard = styled.div`
  min-height: 100px;
  height: fit-content;
  position: relative;
  width: auto;

  &:hover {
    scale: 1;
    box-shadow: none;
    border: none;
  }

  @media (${queries.l} <= width) {
    min-height: 180px;
  }
`;
