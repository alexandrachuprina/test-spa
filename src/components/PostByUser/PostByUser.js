import React from "react";
import { Post } from "./styles";

const PostByUser = ({ title, text }) => {
  return (
    <Post>
      <h2>{title}</h2>
      <p>{text}</p>
    </Post>
  );
};

export default PostByUser;
