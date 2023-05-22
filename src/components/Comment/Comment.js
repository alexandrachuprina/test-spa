import React from "react";
import { Card } from "react-bootstrap";

function Comment({ title, text }) {
  return (
    <Card border="primary" style={{ width: "100%", marginTop: "20px" }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Comment;
