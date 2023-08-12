import React from "react";
import { Post } from "./styles";

const PostByUser = ({ title, text }) => {
  return (
    <Post>
      <h2 className="text">{title}</h2>
      <p className="text">{text}.</p>
    </Post>
  );
};

export default PostByUser;
