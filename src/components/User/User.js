import React from "react";
import { BasicCard } from "../../styles/UI-kit";
import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

function User({ name, email, phone, id }) {
  return (
    <Card>
      <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Телефон: {phone}</p>
      </div>

      <p className="showOnHover">Подробнее о {name}</p>
    </Card>
  );
}

export default User;

const Card = styled(BasicCard)`
  min-height: 180px;
  height: 180px;
  h2 {
    font-size: 18px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    font-size: 14px;
    margin: 0;
    color: ${(p) => p.theme.primaryMedium};
  }
  .showOnHover {
    opacity: 0;
    color: ${(p) => p.theme.primaryLight};
  }

  &:hover {
    .showOnHover {
      opacity: 1;
      transition: opacity 0.5s;
    }
  }

  ${(p) =>
    p.theme.black === "true" && {
      border: `1px solid ${p.theme.primary}`,
    }}

  @media (${queries.sm} <= width < ${queries.xl}) {
    width: 270px;
  }
  @media (${queries.xl} <= width) {
    width: 300px;
  }
`;
