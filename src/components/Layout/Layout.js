import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import styles from "./Layout.module.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Layout() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Тестовое задание</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Главная</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">Обо мне</Link>
              </Nav.Link>
              <Nav.Link>
                Чуприна Александра
              </Nav.Link>
              <Nav.Link>
                alexandra.chuprina.2000@gmail.com
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Layout;
