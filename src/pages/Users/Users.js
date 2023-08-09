import React from "react";
import { styled } from "styled-components";
import ListOfUsers from "../../components/ListOfUsers/ListOfUsers";
import { queries } from "../../styles/UI-kit";

const Users = () => {
  return (
    <Wrapper>
      {/* <ListOfUsers /> */}
    </Wrapper>
  );
};

export default Users;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 80px;

  @media (width < ${queries.sm}) {
    padding: 0 20px;
  }

  @media (${queries.xl} <= width) {
    max-width: 1600px;
    width: 100%;
    padding: 0;
  }
`;
