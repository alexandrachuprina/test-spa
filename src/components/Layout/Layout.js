import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Layout() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">SIMPLE BLOG</Navbar.Brand>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Layout;
