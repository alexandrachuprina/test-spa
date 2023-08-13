import React from "react";
import { Card } from "./styles";

const SkeletonUser = ({ loading }) => {
  return (
    <div style={{ display: loading ? "flex" : "none" }}>
      <Card />
    </div>
  );
};

export default SkeletonUser;
