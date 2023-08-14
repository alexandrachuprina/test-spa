import React from "react";
import { useSelector } from "react-redux";
import User from "../User/User";
import { UserLink, Users } from "./styles";
import { skeletonUsers } from "./skeletonUsers";
import SkeletonUser from "../User/SkeletonUser/SkeletonUser";

const ListOfUsers = () => {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.isLoading);

  return (
    <Users>
      {!loading &&
        users.map((user) => (
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
      {!loading &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user, i) => (
          <SkeletonUser key={user[i]} />
        ))}
    </Users>
  );
};

export default ListOfUsers;
