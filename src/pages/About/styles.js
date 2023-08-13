import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Page = styled.div`
  box-sizing: border-box;
  padding: 0 100px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (width < ${`600px`}) {
    padding: 0 20px;
  }
  @media (${`600px`} <= width < ${queries.xl}) {
    padding: 0 80px;
  }
  @media (${queries.xl} <= width) {
    max-width: 1600px;
  }
`;
