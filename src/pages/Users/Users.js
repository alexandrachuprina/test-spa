import React, { useEffect } from "react";
import ListOfUsers from "../../components/ListOfUsers/ListOfUsers";
import { Page } from "./styles";
import { useDispatch } from "react-redux";
import { getUsers } from "../../app/usersSlice";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Page>
      <ListOfUsers />
    </Page>
  );
};

export default Users;
