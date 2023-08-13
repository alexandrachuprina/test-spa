import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Description = styled.div`
  width: 80%;
  h2,
  .subheader {
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    color: ${(p) => p.theme.primaryMedium};
  }

  h2 {
    font-size: 22px;
  }
  .subheader {
    font-size: 20px;
  }

  @media (width < ${`600px`}) {
    width: 100%;
  }
  @media (${`600px`} <= width < ${queries.xl}) {
    width: 100%;
  }
`;
