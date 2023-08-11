import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Post = styled.div`
  min-height: 250px;
  height: 250px;
  width: 340px;

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
    color: ${(p) => p.theme.primaryLight};
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
`;
