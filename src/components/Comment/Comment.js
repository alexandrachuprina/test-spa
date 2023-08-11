import React from "react";
import { Card } from "./styles";

function Comment({ title, text }) {
  return (
    <Card>
      {title && (
        <>
          <p className="title">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </p>
          <p>{text.charAt(0).toUpperCase() + text.slice(1)}.</p>
        </>
      )}
    </Card>
  );
}

export default Comment;
