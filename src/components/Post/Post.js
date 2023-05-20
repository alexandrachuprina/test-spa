import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserId, getComments } from "../../features/commentsSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import photo from "../../assets/icon.jpg";
import Comment from "../Comment/Comment";

function Post({ title, text, userId }) {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  // useEffect(() => {
  //   console.log(comments)
  // }, [dispatch])

  return (
    <Card style={{ width: "400px", margin: "2vh" }}>
      {/* <Card.Img variant="top" src={photo} /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(getUserId(userId));
            dispatch(getComments());
            setShowComments(!showComments);
          }}
        >
          Комментарии
        </Button>
        {showComments ? (
          <>
            {comments.map((elem) => (
              <Comment title={elem.email} text={elem.body}/>
            ))}
          </>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default Post;

// dispatch(getUserId(userId));
