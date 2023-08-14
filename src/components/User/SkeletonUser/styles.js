import { styled } from "styled-components";
import { queries } from '../../../styles/UI-kit'
import { BasicCard } from "../../../styles/UI-kit";

export const Card = styled(BasicCard)`
  min-height: 180px;
  height: 180px;

  ${(p) =>
    p.theme.black && {
      border: `1px solid ${p.theme.primary}`,
    }}

  @media (${queries.sm} <= width < ${queries.xl}) {
    width: 270px;
  }
  @media (${queries.xl} <= width) {
    width: 300px;
  }
`;
