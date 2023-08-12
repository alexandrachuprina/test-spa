import { queries } from "../../styles/UI-kit";
import { styled } from "styled-components";
import { BasicCard } from "../../styles/UI-kit";

export const Card = styled(BasicCard)`
  min-height: 60px;
  height: fit-content;
  width: 88%;

  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    font-size: 16px;
    width: 80%;
    margin: 0;
    color: ${(p) => p.theme.primaryLight};
    &::first-letter {
      text-transform: capitalize;
    }
  }
  p {
    font-size: 12px;
    color: ${(p) => p.theme.primary};
  }

  &:hover {
    scale: 1;
    box-shadow: none;
    border: none;
  }

  ${(p) =>
    p.theme.black && {
      border: `1px solid ${p.theme.primary}`,
    }}

  @media (width <= ${queries.l}) {
    width: 100%;
  }
`;
