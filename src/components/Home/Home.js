import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { getUsersData } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import ListOfPosts from "../ListOfPosts/ListOfPosts";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <Container>
      <Row >
        <Col lg={8}>
          <ListOfPosts />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
