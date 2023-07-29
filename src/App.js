import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getPosts } from "./features/postsSlice";
import { getComments } from "./features/commentsSlice";
import { getTodos } from "./features/todosSlice";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import About from "./pages/About/About";
import { getUsersData } from "./features/userSlice";
import ChoosenUser from "./components/ChoosenUser/ChoosenUser";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
    dispatch(getUsersData());
    dispatch(getTodos());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":index" element={<ChoosenUser />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
