import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserId, getComments } from "../../features/commentsSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Comment from "../Comment/Comment";
import Photo from "../Photo/Photo";

function Post({ title, text, userId }) {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  return (
    <Card style={{ width: "400px", margin: "2vh" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Photo />
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
              <Comment title={elem.email} text={elem.body} key={elem.id} />
            ))}
          </>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default Post;
