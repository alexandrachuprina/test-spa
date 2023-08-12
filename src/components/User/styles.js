import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";
import { BasicCard } from "../../styles/UI-kit";

export const Card = styled(BasicCard)`
  min-height: 180px;
  height: 180px;
  h2 {
    font-size: 18px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    font-size: 14px;
    margin: 0;
    color: ${(p) => p.theme.primaryMedium};
  }
  .showOnHover {
    opacity: 0;
    color: ${(p) => p.theme.primaryLight};
  }

  &:hover {
    .showOnHover {
      opacity: 1;
      transition: opacity 0.5s;
    }
  }

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
