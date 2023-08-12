import React from "react";
import { Card } from "./styles";

const AboutUserCard = ({
  name,
  email,
  phone,
  street,
  city,
  zipcode,
  company,
  bs,
}) => {
  return (
    <Card>
      <div>
        <h2>{name}</h2>
        <p className="subtitle">Контакты</p>
        <p>Email: {email}</p>
        <p>Телефон: {phone}</p>
        <p className="subtitle">Адрес</p>
        <p>{street},</p>
        <p>{city}</p>
        <p>{zipcode}</p>
        <p className="subtitle">Работа</p>
        <p>Компания: {company}</p>
        <p>{bs}</p>
      </div>
    </Card>
  );
};

export default AboutUserCard;
