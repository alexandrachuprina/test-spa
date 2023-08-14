import React from "react";
import { Card } from "./styles";

const SkeletonPost = ({ view, loading }) => {
  return (
    <div style={{ display: loading ? "flex" : "none" }}>
      <Card view={view} />
    </div>
  );
};

export default SkeletonPost;
