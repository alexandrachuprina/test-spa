import { queries } from "../../styles/UI-kit";
import { styled } from "styled-components";


export const PagesWrapper = styled.div`
  padding-top: 60px;
  box-sizing: border-box;
  z-index: -1;
  min-height: 92vh;
  height: fit-content;

  background-color: ${(p) => p.theme.bg};

  @media (${queries.xxs} <= width < ${queries.sm}) {
    min-height: 87vh;
  }

  @media (${queries.xl} <= width) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const NavWrapper = styled.div`
  background-color: ${(p) => p.theme.darkBg};
  box-shadow: 0 4px 16px #00000014, 0 0 16px #0000;

  ${(p) =>
    p.theme.black && {
      borderBottom: `1px solid ${p.theme.primary}`,
    }}

  @media (width < ${queries.sm}) {
    padding-top: 20px;
  }
  @media (${queries.xl} <= width) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
