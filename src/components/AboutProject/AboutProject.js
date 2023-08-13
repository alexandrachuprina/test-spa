import React from "react";
import { Description } from "./styles";

const AboutProject = () => {
  return (
    <Description>
      <h2>Одностраничный сайт (SPA) с функционалом блога</h2>
      <br />
      <p className="subheader">Публикации</p>
      <p>Посты пользователей блога представлены на Главной странице.</p>
      <br />
      <p className="subheader">Авторы</p>
      <p>
        Вы можете посмотреть информацию обо всех пользователях на странице Все
        авторы.
      </p>
    </Description>
  );
};

export default AboutProject;
