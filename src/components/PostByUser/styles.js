import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Post = styled.div`
  min-height: 260px;
  max-height: 290px;
  width: 100%;

  background-color: transparent;
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
    color: ${(p) => p.theme.primaryLight};
    margin-bottom: 30px;
  }
  p {
    font-size: 14px;
    color: ${(p) => p.theme.primaryMedium};
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

  ${(p) =>
    p.theme.black && {
      boxShadow: "none",
      border: `1px solid ${p.theme.primary}`,
    }}

  @media (width <= ${queries.l}) {
    p {
      font-size: 12px;
    }
    min-height: auto;
    height: fit-content;
  }
  @media (${queries.l} < width < ${queries.xl}) {
    min-height: 160px;
    max-height: 200px;
  }
`;
