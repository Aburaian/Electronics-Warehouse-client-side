import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="primary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
            <span className="p-2">Electronics Warehouse</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fw-bold text-uppercase">
              <Nav.Link as={Link} to="services">
                Manage items
              </Nav.Link>
              <Nav.Link as={Link} to="services">
                Add items
              </Nav.Link>
              <Nav.Link as={Link} to="services">
                My items
              </Nav.Link>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav className="fw-bold text-uppercase">
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              {/* {user ? (
                <button
                  className="btn btn-link fw-bold text-uppercase text-white text-decoration-none"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
