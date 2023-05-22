import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../features/postsSlice";
import Post from "../Post/Post";
import { getComments } from "../../features/commentsSlice";
// import { Container, Row, Col } from "react-bootstrap";

function ListOfPosts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments())
  }, []);

  return (
    <>
      {posts.map((elem) => (
        <Post title={elem.title} text={elem.body} userId={elem.userId} postId={elem.id} key={elem.id}/>
      ))}
    </>
  );
}

export default ListOfPosts;
