import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostId, getComments } from "../../features/commentsSlice";
import { setUserData } from "../../features/userSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Comment from "../Comment/Comment";

function PostByUser({ title, text, postId }) {
  const allComments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(getPostId(postId));
    dispatch(getComments());
    setComments(allComments);
  }, []);

  return (
    <Card style={{ width: "400px", margin: "2vh" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            // setComments(allComments);
            console.log(comments)
            setShowComments(!showComments);
          }}
        >
          Комментарии
        </Button>
        {showComments ? (
          <>
            {/* {comments.length === 0 ? <p>no comments bro</p> : null} */}

            {comments.map((elem) => (
              <Comment title={elem.email} text={elem.body} key={elem.id} />
            ))}
          </>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default PostByUser;
