import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

export const Card = styled.div`
  width: 390px;
  height: 450px;
  border-radius: 18px;
  padding: 24px 36px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    font-size: 16px;
    padding: 0;
    margin: 0;
    color: ${(p) => p.theme.primaryMedium};
  }
  .subtitle {
    font-size: 18px;
    padding: 10px 0 0 0;
    margin: 20px 0 10px 0;
    border-top: 1px solid ${(p) => p.theme.primary};
  }
  .text {
    ::first-letter {
      text-transform: uppercase;
    }
  }

  ${(p) =>
    p.theme.black && {
      border: `1px solid ${p.theme.primary}`,
      boxShadow: "none",
    }}

  @media (width <= ${queries.sm}) {
    position: relative;
    width: 100%;
    height: fit-content;
  }
`;
