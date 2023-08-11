import React from "react";
import { useSelector } from "react-redux";
import User from "../User/User";
import { UserLink, Users } from "./styles";

const ListOfUsers = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <Users>
      {users.map((user) => (
        <UserLink to={`/users/${user.id}`}>
          <User
            key={user.id}
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
