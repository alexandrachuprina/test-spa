import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Page = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (${queries.xxs} <= width <= ${queries.sm}) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
  }
  @media (${queries.xxs} <= width <= ${queries.xs}) {
    padding: 0 20px;
  }
  @media (${queries.xs} < width <= ${queries.sm}) {
    padding: 0 80px;
  }
  @media (${queries.xl} <= width) {
    max-width: 1600px;
  }
`;
