import React from "react";
import { Card } from "./styles";
import { useSelector } from "react-redux";
import { lightChecked } from "../../assets/todos/lightChecked";
import { darkChecked } from "../../assets/todos/darkChecked";
import { lightNotChecked } from "../../assets/todos/lightNotChecked";
import { darkNotChecked } from "../../assets/todos/darkNotChecked";

const Todo = ({ title, completed }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <Card>
      <p>{title}</p>
      {theme.black ? (
        <>{completed ? <>{darkChecked}</> : <>{darkNotChecked}</>}</>
      ) : (
        <>{completed ? <>{lightChecked}</> : <>{lightNotChecked}</>}</>
      )}
    </Card>
  );
};

export default Todo;
