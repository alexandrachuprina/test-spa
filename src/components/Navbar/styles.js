import { queries } from "../../styles/UI-kit";
import { styled } from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px 0 100px;

  a {
    padding: 0;
    color: ${(p) => p.theme.primary};
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    margin: 0 20px 0 0;
    border-bottom: 1px solid ${(p) => p.theme.main};
  }

  .active {
    color: ${(p) => p.theme.primaryLight};
    border-bottom: 1px solid ${(p) => p.theme.primaryLight};
    transition: color 0.5s, border-bottom 0.5s;
  }

  @media (width < ${queries.xs}) {
    a {
      font-size: 14px;
    }
  }
  @media (width > ${queries.xxs}) {
    a {
      font-size: 18px;
    }
  }
  @media (width < ${`600px`}) {
    height: 100px;
    padding: 0 20px;

    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
  @media (${`600px`} <= width <= ${queries.l}) {
    height: 80px;
    padding: 0 80px;
  }
  @media (${queries.xl} <= width) {
    max-width: 1600px;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--medium-gray);
  padding: 6px 10px;

  @media (width <= ${queries.xs}) {
    align-self: flex-start;
  }
`;

export const Icon = styled.div`
  margin: 0 12px;
  cursor: pointer;
`;
