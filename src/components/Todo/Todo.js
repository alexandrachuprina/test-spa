import React from "react";
import { styled } from "styled-components";
import { BasicCard } from "../../styles/UI-kit";
import { queries } from "../../styles/UI-kit";

const Todo = ({ title, completed }) => {
  return (
    <Card>
      <h2>{title}</h2>
      {completed ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-square"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        </svg>
      )}
    </Card>
  );
};

export default Todo;

const Card = styled(BasicCard)`
  min-height: 60px;
  height: fit-content;
  width: 88%;

  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    font-size: 16px;
    width: 80%;
    margin: 0;
    color: ${(p) => p.theme.primaryLight};
    &::first-letter {
      text-transform: capitalize;
    }
  }
  p {
    font-size: 12px;
    color: ${(p) => p.theme.primary};
  }

  &:hover {
    scale: 1;
    box-shadow: none;
    border: none;
  }

  ${(p) =>
    p.theme.black === "true" && {
      border: `1px solid${(p) => p.theme.primary})`,
    }}

  @media (width <= ${queries.l}) {
    width: 100%;
  }
`;
