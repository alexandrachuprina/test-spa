import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { Button, Card, Row, Col, Container, ListGroup } from "react-bootstrap";
import PostByUser from "./PostByUser";

function User() {
  const [postsByUser, setPostsByUser] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const { id } = useParams();
  const user = useSelector(selectUser);
  const posts = useSelector((state) => state.posts.posts);
  const navigate = useNavigate();

  useEffect(() => {
    const filtredPosts = posts.filter((post) => post.userId === user.id);
    setPostsByUser(filtredPosts);
  }, []);

  return (
    <Container>
      <Row>
        <Col xl={6}>
          <Button
            variant="primary"
            onClick={() => navigate(-1)}
            style={{ margin: "50px 0" }}
          >
            Вернуться назад
          </Button>
          <Card style={{ width: "400px" }}>
            <Card.Body>
              <Card.Title>Информация о пользователе</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Имя: {user.name}</ListGroup.Item>
              <ListGroup.Item>Почта: {user.email}</ListGroup.Item>
              <ListGroup.Item>Телефон: {user.phone}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">{user.website}</Card.Link>
            </Card.Body>
            <Card.Body>
              <Button
                variant="primary"
                onClick={() => setShowPosts(!showPosts)}
              >
                Посты {user.username}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {showPosts ? (
          <>
            {postsByUser.map((post, i) => (
              <PostByUser key={i} title={post.title} text={post.body} userId={user.id}/>
            ))}
          </>
        ) : null}
      </Row>
    </Container>
  );
}

export default User;
