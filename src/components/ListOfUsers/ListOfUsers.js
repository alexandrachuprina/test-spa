import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../features/userSlice";
import { styled } from "styled-components";
import User from "../User/User";
import { queries } from "../../styles/UI-kit";

const ListOfUsers = () => {
  const users = useSelector(selectUsersData);

  return (
    <Users>
      {users.map((user, index) => (
        <UserLink to={`/users/${index}`}>
          <User
            id={user.id}
            name={user.name}
            phone={user.phone}
            email={user.email}
          />
        </UserLink>
      ))}
    </Users>
  );
};

export default ListOfUsers;

const Users = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 22%);
  row-gap: 40px;
  justify-content: space-between;
  justify-items: center;

  @media (width < ${queries.sm}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
  @media (${queries.sm} <= width < ${queries.xl}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 50px;
  }
  @media (${queries.xl} <= width) {
    justify-content: center;
  }
`;

export const UserLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
