import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Posts, Page, Buttons, Column } from "./styles";
import { BasicBtn } from "../../styles/UI-kit";

import Post from "../Post/Post";
import Small from "./icons/Small";
import Large from "./icons/Large";
import List from "./icons/List";
import PostsSlice, { getMorePosts } from "../../app/postsSlice";
import { skeletonPosts } from "./skeleton";
import SkeletonPost from "../SkeletonPost/SkeletonPost";

function ListOfPosts() {
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.isLoading);
  const loadingMore = useSelector((state) => state.posts.isLoadingMore);
  const user = useSelector((state) => state.posts.choosenUserId);
  const dispatch = useDispatch();

  const [postView, setPostView] = useState("large");

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <Page>
      <Column>
        <Posts view={postView}>
          {loading &&
            skeletonPosts.map((elem) => (
              <SkeletonPost key={elem} view={postView} loading={loading} />
            ))}

          {!loading &&
            posts.map((elem) => (
              <Post
                key={elem.post.id}
                postView={postView}
                title={elem.post.title}
                text={elem.post.body}
                postId={elem.post.id}
                showAuthor={true}
                user={elem.user}
                userId={elem.post.userId}
                comments={elem.comments}
              />
            ))}
        </Posts>
        {user === 0 && loadingMore ? (
          <p>Загружаем...</p>
        ) : (
          <BasicBtn onClick={() => dispatch(getMorePosts())}>
            <p>Загрузить ещё</p>
          </BasicBtn>
        )}
      </Column>

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
    </Page>
  );
}

export default ListOfPosts;
