import { styled } from "styled-components";
import css from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Posts = styled.div`
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
  position: absolute;
  left: 95%;
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

export const Card = styled.div`
  ${(props) =>
    props.view === "large" &&
    `
      width: 85%;
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
      width: 85%;
      display: grid;
      grid-template-columns: 48% 48%;
      justify-content: space-between;
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
      width: 85%;
      display: flex;
      flex-direction: column;
      row-gap: 25px;

      @media (width <= ${queries.sm}) {
        width: 100%;
      }
    `}
`;

export const Loading = styled.div`
  position: relative;
  margin-left: 300px;
  display: flex;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  align-items: center;
`;
