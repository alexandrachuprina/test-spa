import React from "react";
import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

function Comment({ title, text }) {
  return (
    <Card>
      <p className="title">{title.charAt(0).toUpperCase() + title.slice(1)}</p>
      <p>{text.charAt(0).toUpperCase() + text.slice(1)}.</p>
    </Card>
  );
}

export default Comment;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  p {
    font-size: 12px;
    padding: 0;
    margin: 0;
  }
  .title {
    font-size: 14px;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
  }

  @media (width <= ${queries.xl}) {
    width: 100%;
    .title {
      font-size: 12px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 6px;
    }
  }
`;
