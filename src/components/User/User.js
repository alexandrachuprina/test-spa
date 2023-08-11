import React from "react";
import { Card } from "./styles";

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
