import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import Layout from "../src/components/Layout/Layout";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
