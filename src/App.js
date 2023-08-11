import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "./app/postsSlice";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import About from "./pages/About/About";
import ChoosenUser from "./components/ChoosenUser/ChoosenUser";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setIsLoading(false);
    }, 4000);
  }

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <>
      {!isLoading && (
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
      )}
    </>
  );
}

export default App;
