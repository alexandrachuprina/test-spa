import React from "react";
import ListOfPosts from "../../components/ListOfPosts/ListOfPosts";
import Filter from "../../components/Filter/Filter";
import { Page } from "./styles";

function Home() {
  
  return (
    <Page>
      <Filter />
      <ListOfPosts />
    </Page>
  );
}

export default Home;
