import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../features/userSlice";
import Comment from "../Comment/Comment";
import { queries } from "../../styles/UI-kit";

function Post({ title, text, userId, postId, postView, showAuthor }) {
  const postLoading = useSelector((state) => state.posts.isLoading);
  const commentsLoading = useSelector((state) => state.comments.isLoading);
  const userLoading = useSelector((state) => state.user.isLoading);

  const allComments = useSelector((state) => state.comments.comments);
  const usersData = useSelector(selectUsersData);
  const keyword = useSelector((state) => state.posts.keyword);

  const [userName, setUserName] = useState("");
  const [index, setIndex] = useState();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postLoading && !commentsLoading && !userLoading) {
      const user = usersData.find((elem) => elem.id === userId);
      const name = user.name;
      const userIndex = usersData.indexOf(user);
      setUserName(name);
      setIndex(userIndex);
      setComments(allComments.filter((elem) => elem.postId === postId));
      setLoading(false);
    }
  }, [postLoading, commentsLoading, userLoading]);

  const showHighlight = (higlight, text) => {
    if (higlight != "") {
      const parts = text.split(new RegExp(`(${higlight})`, "gi"));

      return parts.map((part) => (
        <>
          {part === higlight ? (
            <b
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "0 4px",
              }}
            >
              {part}
            </b>
          ) : (
            part
          )}
        </>
      ));
    } else {
      return text;
    }
  };

  return (
    <>
      {!loading ? (
        <>
          {postView === "large" && (
            <Card>
              <Content>
                <h2 className="text">{title}</h2>
                <p className="text">{showHighlight(keyword, text)}.</p>
              </Content>

              <p>
                post by
                <Link to={`/users/${index}`} className="user">
                  {userName ? userName : null}
                </Link>
              </p>

              <PostComments>
                {comments.map((elem) => (
                  <Comment title={elem.email} text={elem.body} key={elem.id} />
                ))}
              </PostComments>
            </Card>
          )}
          {postView === "small" && (
            <>
              {showAuthor ? (
                <SmallCard>
                  <Content>
                    <h2 className="text">{title}</h2>
                    <p className="text">{showHighlight(keyword, text)}.</p>
                  </Content>

                  <p>
                    post by
                    <Link to={`/users/${index}`} className="user">
                      {userName ? userName : null}
                    </Link>
                  </p>
                </SmallCard>
              ) : (
                <AuthorsCard>
                  <Content>
                    <h2 className="text">{title}</h2>
                    <p className="text">{showHighlight(keyword, text)}.</p>
                  </Content>
                </AuthorsCard>
              )}
            </>
          )}

          {postView === "list" && (
            <ListItem>
              <div className="content">
                <h2 className="text">{title}</h2>
                <p className="text">{showHighlight(keyword, text)}.</p>
              </div>
              <p>
                post by
                <Link to={`/users/${index}`} className="user">
                  {userName ? userName : null}
                </Link>
              </p>
            </ListItem>
          )}
        </>
      ) : null}
    </>
  );
}

export default Post;

const Card = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: transparent;
  height: fit-content;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 26px 0px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: scale 0.5s, box-shadow 0.5s;
  cursor: pointer;

  h2 {
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    color: ${(p) => p.theme.primaryMedium};
  }
  .user {
    margin-left: 6px;
    color: ${(p) => p.theme.primaryLight};
  }
  .text {
    &::first-letter {
      text-transform: uppercase;
    }
  }

  &:hover {
    scale: 1.05;
    box-shadow: ${(p) => p.theme.boxShadow};
  }

  ${(p) =>
    p.theme.black === "true" && {
      border: `1px solid ${p.theme.primary}`,
      boxShadow: "none",
    }}

  @media (width <= ${queries.sm}) {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;

  p {
    font-size: 18px;
    width: fit-content;
  }

  @media (width <= ${queries.sm}) {
    p {
      font-size: 12px;
    }
  }
`;

const PostComments = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  border-top: 1px solid #d8d8d8;
  padding-top: 20px;

  @media (width < ${queries.sm}) {
    flex-direction: column;
  }
`;

export const BasicBtn = styled.button`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 6px 12px;
  width: fit-content;
  border-radius: 999px;
  p {
    font-size: 16px;
    color: white;
    padding: 0;
    margin: 0;
  }
`;

const SmallCard = styled(Card)`
  min-height: 250px;
  height: 250px;
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }

  @media (width < ${queries.sm}) {
    p {
      font-size: 12px;
    }
    min-height: auto;
    height: fit-content;
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  h2 {
    font-size: 18px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    font-size: 14px;
    color: ${(p) => p.theme.primaryMedium};
  }
  .content {
    width: 65%;
  }
  .text {
    &::first-letter {
      text-transform: uppercase;
    }
  }
  .user {
    margin-left: 6px;
    color: ${(p) => p.theme.primaryLight};
  }

  @media (width <= ${queries.xl}) {
    width: 100%;
    flex-direction: column;
    .content {
      width: 100%;
    }
  }
`;

const AuthorsCard = styled(SmallCard)`
  min-height: 100px;
  height: fit-content;
  position: relative;
  width: auto;

  &:hover {
    scale: 1;
    box-shadow: none;
    border: none;
  }

  @media (${queries.l} <= width) {
    min-height: 180px;
  }
`;
