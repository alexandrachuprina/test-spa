import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Post from "../Post/Post";
import ListOfPosts from "../ListOfPosts/ListOfPosts";

function Home() {
  return (
    <Container>
      <Row>
        {/* <Col> */}
      {/* <Row> */}
        <ListOfPosts />
      {/* </Row> */}
      {/* </Col> */}
      </Row>
    </Container>
  );
}

export default Home;
