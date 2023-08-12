import { styled, keyframes } from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Card = styled.div`
  width: 390px;
  height: 280px;
  border-radius: 18px;
  padding: 24px 36px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  position: fixed;
  top: 100;
  left: 100;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => p.theme.main};

  h2 {
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    color: ${(p) => p.theme.primaryMedium};
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  ${(p) =>
    p.theme.black && {
      boxShadow: "none",
      border: `1px solid ${p.theme.primary}`,
    }}

  @media (${"180px"} <= width <= ${queries.sm}) {
    display: none;
  }
  @media (width <= ${queries.xl}) {
    width: 300px;
  }
`;

export const Option = styled.div`
  margin-bottom: 20px;
  .user-select {
    width: 100%;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;

export const CardMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 5;

  h2 {
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    color: ${(p) => p.theme.primaryMedium};
    padding: 0;
    margin: 0;
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .search {
    display: flex;
    flex-direction: column;

    @media (width < ${queries.l}) {
      margin-bottom: 45px;
    }
  }

  @media (${queries.sm} < width) {
    display: none;
  }
`;

export const position = keyframes`
  from {
    top: 100vh;
  }

  to {
    top: 20vh;
  }
`;

export const ModalCard = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  padding: 20px;

  overflow: scroll;
  overflow-y: scroll;

  border: 1px solid ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.main};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  h2 {
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    color: ${(p) => p.theme.primaryMedium};
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0;
  }

  animation: ${position} 0.3s ease-in-out;

  @media (${queries.xs} < width <= ${queries.sm}) {
    padding: 20px 80px;
  }
`;
