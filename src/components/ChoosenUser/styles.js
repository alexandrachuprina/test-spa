import { queries } from "../../styles/UI-kit";
import { styled } from "styled-components";

export const Page = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (width < ${queries.sm}) {
    padding: 0 20px;
  }
  @media (width <= ${queries.l}) {
    flex-direction: column;
  }

  @media (${queries.xl} <= width) {
    max-width: 1600px;
  }
`;


export const Content = styled.div`
  margin-left: 480px;
  display: flex;
  flex-direction: row;
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 40px;
  padding: 20px 0;

  overflow: scroll;
  overflow-y: scroll;
  min-width: 400px;

  height: 72vh;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.08);
  }

  @media (width <= ${queries.l}) {
    min-width: auto;

    overflow: auto;
    overflow-y: auto;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: fit-content;
  }
`;
