import { queries } from "../../styles/UI-kit";
import { styled } from "styled-components";
import { BasicCard } from "../../styles/UI-kit";

export const Card = styled(BasicCard)`
  min-height: 60px;
  height: 100px;
  /* width: auto; */

  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-size: 14px;
    width: 80%;
    margin: 0;
    color: ${(p) => p.theme.primaryLight};
    &::first-letter {
      text-transform: capitalize;
    }
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
