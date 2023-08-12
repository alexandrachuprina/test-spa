import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, setIsLoadingUser, setUserId } from "../../app/usersSlice";
import Todo from "../Todo/Todo";
import { Page, Content, List } from "./styles";
import PostByUser from "../PostByUser/PostByUser";
import AboutUserCard from "./AboutUserCard/AboutUserCard";

const ChoosenUser = () => {
  const { index } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.users.isLoadingUser);
  const userInfo = useSelector((state) => state.users.userInfo);
  const postsByUser = useSelector((state) => state.users.postsByUser);
  const todosByUser = useSelector((state) => state.users.todosByUser);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [todos, setTodos] = useState();

  useEffect(() => {
    dispatch(setUserId(index));
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      console.log("set data");

      setUser(userInfo[0]);
      setPosts(postsByUser);
      setTodos(todosByUser);

      setLoading(false);

      setTimeout(() => {
        dispatch(setIsLoadingUser());
      }, 1000);
    }
  }, [isLoading]);

  return (
    <>
      {!loading ? (
        <Page>
          <AboutUserCard
            name={user.name}
            email={user.email}
            phone={user.phone}
            street={user.address.street}
            city={user.address.city}
            zipcode={user.address.zipcode}
            company={user.company.name}
            bs={user.company.bs}
          />
          <Content>
            <div>
              <h2 className="title">Публикации</h2>
              <List>
                {posts.map((post) => (
                  <PostByUser
                    key={post.id}
                    title={post.post.title}
                    text={post.post.body}
                  />
                ))}
              </List>
            </div>
            <div>
              <h2 className="title">To-do list</h2>
              <List>
                {todos.map((todo) => (
                  <Todo
                    key={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                  />
                ))}
              </List>
            </div>
          </Content>
        </Page>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ChoosenUser;
