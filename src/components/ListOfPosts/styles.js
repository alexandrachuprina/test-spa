import { styled } from "styled-components";
import css from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Page = styled.div`
  margin-bottom: 60px;

  position: relative;
  margin-left: 480px;
  display: flex;
  flex-direction: row;

  @media (${queries.xxs} <= width <= ${queries.sm}) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (${queries.sm} < width <= ${queries.xl}) {
    margin-left: 380px;
  }
`;

export const Buttons = styled.div`
  position: fixed;
  left: 90vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .btn {
    margin-bottom: 20px;
  }

  @media (${queries.xxs} <= width <= ${queries.sm}) {
    left: auto;

    z-index: 50;
    position: fixed;
    top: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    padding: 10p 0;
    border-radius: 999px;
    border: 1px solid ${(p) => p.theme.primary};
    background-color: ${(p) =>
      p.theme.black === "true" ? `${p.theme.darkBg}` : `${p.theme.main}`};

    .btn {
      margin-bottom: 0px;
    }

    @media (width < ${queries.sm}) {
      width: 60vw;
    }
    @media (${queries.xs} < width <= ${queries.sm}) {
      width: 30vw;
    }
  }
`;

export const Posts = styled.div`
  ${(props) =>
    props.view === "large" &&
    `
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 50px;

      @media (${queries.xxs} <= width <= ${queries.sm}) {
        width: 100%;
      }
    `}

  ${(props) =>
    props.view === "small" &&
    `
      width: 100%;
      display: grid;
      grid-template-columns: 45% 45%;
      justify-content: space-between;
      column-gap: 10%;
      row-gap: 50px;

      @media (${queries.xxs} <= width <= ${queries.sm}) {
        width: 100%;
      }
      @media (width < ${queries.xl}) {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
      }
    `}

  ${(props) =>
    props.view === "list" &&
    `
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 50px;

      @media (width <= ${queries.sm}) {
        width: 100%;
      }
    `}
`;

export const Column = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  align-items: center;

  @media (width < ${queries.sm}) {
    width: 100%;
    /* padding: 0 20px; */
  }
  @media (${queries.sm} < width < ${queries.xl}) {
    width: 100%;
    /* box-sizing: border-box; */
  }
`;
