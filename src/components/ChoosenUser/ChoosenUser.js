import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectUsersData } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import Post from "../Post/Post";
import Todo from "../Todo/Todo";
import { queries } from "../../styles/UI-kit";

const ChoosenUser = () => {
  const { index } = useParams();
  const users = useSelector(selectUsersData);
  const user = users[index];

  const posts = useSelector((state) => state.posts.posts);
  const todos = useSelector((state) => state.todos.todos);

  const [postsByUser, setPostsByUser] = useState([]);
  const [todosByUser, setTodosByUser] = useState([]);

  useEffect(() => {
    const filtredPosts = posts.filter((post) => post.userId === user.id);
    setPostsByUser(filtredPosts);
    console.log(filtredPosts);
    const filtredTodos = todos.filter((todo) => todo.userId === user.id);
    setTodosByUser(filtredTodos);
    console.log(filtredTodos);
  }, [user]);

  return (
    <>
      {user ? (
        <Page>
          <Card>
            <div>
              <h2>{user.name}</h2>
              <p className="subtitle">Контакты</p>
              <p>Email: {user.email}</p>
              <p>Телефон: {user.phone}</p>
              <p className="subtitle">Адрес</p>
              <p>{user.address.street},</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
              <p className="subtitle">Работа</p>
              <p>Компания: {user.company.name}</p>
              <p>{user.company.bs}</p>
            </div>
          </Card>
          <Content>
            <div>
              <h2 className="title">Публикации</h2>
              <List>
                {postsByUser.map((post) => (
                  <Post
                    title={post.title}
                    text={post.body}
                    userId={user.id}
                    postId={post.id}
                    postView={"small"}
                    showAuthor={false}
                  />
                ))}
              </List>
            </div>
            <div>
              <h2 className="title">To-do list</h2>
              <List>
                {todosByUser.map((todo) => (
                  <Todo title={todo.title} completed={todo.completed} />
                ))}
              </List>
            </div>
          </Content>
        </Page>
      ) : null}
    </>
  );
};

export default ChoosenUser;

const Page = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (width < ${queries.sm}) {
    padding: 0 20px;
  }
  @media (width <= ${queries.l}) {
    flex-direction: column;
  }
  
  @media (${queries.xl} <= width) {
    max-width: 1600px;
  }
`;

const Card = styled.div`
  position: fixed;
  top: 100;
  left: 100;

  width: 390px;
  height: 450px;
  border-radius: 18px;
  padding: 24px 36px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    color: ${(p) => p.theme.primaryLight};
  }
  p {
    font-size: 16px;
    padding: 0;
    margin: 0;
    color: ${(p) => p.theme.primaryMedium};
  }
  .subtitle {
    font-size: 18px;
    padding: 10px 0 0 0;
    margin: 20px 0 10px 0;
    border-top: 1px solid ${(p) => p.theme.primary};
  }

  ${(p) =>
    p.theme.black === "true" && {
      border: `1px solid ${p.theme.primary}`,
      boxShadow: "none",
    }}

  @media (width <= ${queries.sm}) {
    position: relative;
    width: 100%;
    height: fit-content;
  }
`;

const Content = styled.div`
  margin-left: 480px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 40px;

  .title {
    font-size: 20px;
    margin-left: 16px;
    text-align: center;
    margin: 0 0 20px 0;
    color: ${(p) => p.theme.primaryLight};
  }

  @media (width <= ${queries.sm}) {
    margin-top: 60px;

    margin-left: 0;
    /* flex-direction: column;
    justify-content: center; */

    width: 100%;
    height: fit-content;
  }
  @media (width <= ${queries.l}) {
    flex-direction: column;
    justify-content: center;

    /* width: 100%; */
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 40px;
  padding: 20px 0;

  overflow: scroll;
  overflow-y: scroll;
  min-width: 400px;

  height: 72vh;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.08);
  }

  @media (width <= ${queries.l}) {
    min-width: auto;

    overflow: auto;
    overflow-y: auto;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: fit-content;
  }
`;
