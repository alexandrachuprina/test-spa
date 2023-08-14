import { queries } from "../../styles/UI-kit";
import { styled } from "styled-components";

export const Page = styled.div`
  padding: 0 80px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 80px;
  width: 100%;
  padding-bottom: 160px;

  .title {
    padding-left: 40px;
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
    margin-bottom: 30px;
  }

  @media (width < ${`600px`}) {
    padding: 0 20px;
  }
  @media (${queries.xl} <= width) {
    max-width: 1600px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  column-gap: 40px;

  .title {
    font-size: 20px;
    margin-left: 16px;
    text-align: center;
    margin: 0 0 20px 0;
    color: ${(p) => p.theme.primaryLight};
  }

  @media (width <= ${queries.sm}) {
    margin-top: 60px;

    margin-left: 0;

    width: 100%;
    height: fit-content;
  }
  @media (width <= ${queries.l}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Posts = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 22%);
  justify-content: space-between;
  column-gap: 4%;
  row-gap: 40px;
  padding: 20px 0;

  @media (width <= ${queries.l}) {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (${queries.l} < width < ${`1200px`}) {
    width: 100%;
    height: fit-content;

    display: grid;
    grid-template-columns: repeat(2, 48%);
    justify-content: space-between;
    column-gap: 4%;
    row-gap: 40px;
  }
`;

export const Todos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22%);
  justify-content: space-between;
  column-gap: 4%;
  row-gap: 40px;

  @media (width <= ${queries.l}) {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (${queries.l} < width < ${`1200px`}) {
    width: 100%;
    height: fit-content;

    display: grid;
    grid-template-columns: repeat(2, 48%);
    justify-content: space-between;
    column-gap: 4%;
    row-gap: 40px;
  }
`;
