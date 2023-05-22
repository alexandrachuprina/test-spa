import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostId, getComments } from "../../features/commentsSlice";
import { setUserData } from "../../features/userSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import Comment from "../Comment/Comment";

function PostByUser({ title, text, postId }) {
  const allComments = useSelector((state) => state.comments.comments);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setComments(allComments);
  }, [showComments]);

  const setDelay = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Card style={{ width: "400px", margin: "2vh" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            setShowComments(!showComments);
            setDelay();
          }}
        >
          Комментарии
        </Button>
        <Card.Body>
          {showComments ? (
            <>
              {isLoading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <>
                  {comments.length === 0 ? <p>no comments bro</p> : null}
                  {comments
                    .filter((elem) => elem.postId === postId)
                    .map((elem) => (
                      <Comment
                        title={elem.email}
                        text={elem.body}
                        key={elem.id}
                      />
                    ))}
                </>
              )}
            </>
          ) : null}
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default PostByUser;
