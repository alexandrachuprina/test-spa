import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Page = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (${queries.xxs} <= width <= ${queries.l}) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    row-gap: 80px;
  }
  @media (${queries.xxs} <= width <= 600px) {
    padding: 0 20px;
  }
  @media (600px < width <= ${queries.sm}) {
    padding: 0 80px;
  }
  @media (${queries.xl} <= width) {
    max-width: 1600px;
  }
`;
