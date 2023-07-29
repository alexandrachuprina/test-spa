import { styled } from "styled-components";

export const BasicCard = styled.div`
  width: 100%;
  min-height: 300px;
  height: fit-content;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
  background-color: transparent;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: scale 0.5s, box-shadow 0.5s;
  cursor: pointer;

  h2 {
    font-size: 24px;
  }
  p {
    font-size: 18px;
    color: ${(p) => p.theme.primary};
  }

  &:hover {
    scale: 1.05;
    box-shadow: ${(p) => p.theme.boxShadow};
  }

  ${(p) =>
    p.theme.black === "true" && {
      border: `1px solid ${p.theme.primary}`,
      boxShadow: "none",
    }}
`;

export const Input = styled.input`
  all: unset;

  margin-top: 10px;
  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.primary};
  box-sizing: border-box;
  padding: 0 0 0 16px;
`;

export const Selection = styled.select`
  all: unset;

  margin-top: 10px;
  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.primary};
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 16px;
`;

export const queries = {
  xxs: `320px`,
  xs: `480px`,
  s: `600px`,
  sm: `768px`,
  m: `900px`,
  l: `1024px`,
  xl: `1200px`,
};
