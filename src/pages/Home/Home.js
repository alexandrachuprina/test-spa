import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListOfPosts from "../../components/ListOfPosts/ListOfPosts";
import Filter from "../../components/Filter/Filter";
import { Page } from "./styles";
import { getPosts } from "../../app/postsSlice";

function Home() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts())
  // }, [])
  
  return (
    <Page>
      <Filter />
      <ListOfPosts />
    </Page>
  );
}

export default Home;
