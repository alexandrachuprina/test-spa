import React from "react";
import { styled } from "styled-components";
import { queries } from "../../styles/UI-kit";

const About = () => {
  return (
    <Wrapper>
      <div className="text">
        <h2>Одностраничный сайт (SPA) с функционалом блога</h2>
        <br />
        <p className="subheader">Публикации</p>
        <p>Посты пользователей блога представлены на Главной странице.</p>
        <br />
        <p className="subheader">Авторы</p>
        <p>Вы можете посмотреть информацию обо всех пользователях на странице Все авторы.</p>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 100px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .text {
    width: 80%;
    h2,
    .subheader {
      color: ${p => p.theme.primaryLight}
    }
    p {
      color: ${p => p.theme.primaryMedium}
    }
  }

  h2 {
    font-size: 22px;
  }
  .subheader {
    font-size: 20px;
  }

  @media (width < ${queries.sm}) {
    .text {
      width: 100%;
    }
    padding: 0 20px;
  }
  @media (${queries.sm} <= width < ${queries.xl}) {
    .text {
      width: 100%;
    }
    padding: 0 80px;
  }
  @media (${queries.xl} <= width) {
    max-width: 1600px;
  }
`;
