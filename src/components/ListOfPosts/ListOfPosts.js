import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Posts, Card, Buttons, ButtonsMobile, Loading, Inner } from "./styles";
import { BasicBtn } from "../Post/styles";

import Post from "../Post/Post";
import Small from "./icons/Small";
import Large from "./icons/Large";
import List from "./icons/List";
import { getMorePosts } from "../../app/postsSlice";

function ListOfPosts() {
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.isLoading);
  const loadingMore = useSelector((state) => state.posts.isLoadingMore);
  const user = useSelector((state) => state.posts.choosenUserId);
  const dispatch = useDispatch();

  const [postView, setPostView] = useState("large");

  return (
    <Posts>
      {!loading ? (
        <Inner>
          <Card view={postView}>
            {posts.map((elem) => (
              <Post
                key={elem.post.id}
                postView={postView}
                title={elem.post.title}
                text={elem.post.body}
                postId={elem.post.id}
                showAuthor={true}
                user={elem.user}
                comments={elem.comments}
              />
            ))}
          </Card>
          {user === 0 && (
            <>
              {loadingMore ? (
                <p>Loading...</p>
              ) : (
                <BasicBtn onClick={() => dispatch(getMorePosts())}>
                  <p>Загрузить ещё</p>
                </BasicBtn>
              )}
            </>
          )}
        </Inner>
      ) : (
        <Loading>
          <p>Loading...</p>
        </Loading>
      )}

      <Buttons>
        <button className="btn" onClick={() => setPostView("large")}>
          <Large />
        </button>
        <button className="btn" onClick={() => setPostView("small")}>
          <Small />
        </button>
        <button className="btn" onClick={() => setPostView("list")}>
          <List />
        </button>
      </Buttons>
    </Posts>
  );
}

export default ListOfPosts;
