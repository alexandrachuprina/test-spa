import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  p {
    font-size: 12px;
    padding: 0;
    margin: 0;
  }
  .title {
    font-size: 14px;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
  }

  @media (width <= ${queries.xl}) {
    width: 100%;
    .title {
      font-size: 12px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 6px;
    }
  }
`;
