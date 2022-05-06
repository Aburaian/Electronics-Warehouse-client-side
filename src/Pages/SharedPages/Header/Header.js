import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="primary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={40} src={logo} alt="" />
            <span className="p-2">Electronics Warehouse</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fw-bold text-uppercase">
              <Nav.Link as={Link} to="products">
                Manage items
              </Nav.Link>
              <Nav.Link as={Link} to="addItems">
                Add items
              </Nav.Link>
              <Nav.Link as={Link} to="myItems">
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
              {user ? (
                <button
                  className="btn btn-link fw-bold text-uppercase text-info text-decoration-none"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
