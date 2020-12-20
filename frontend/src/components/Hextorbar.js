import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Hextorbar() {
  const { currentUser, logout, username } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        Hextor
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        {currentUser && (
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
        )}
      </Nav>
      {currentUser && (
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as: {username}</Navbar.Text>
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </Navbar.Collapse>
      )}
      {!currentUser && (
        <Link as={Link} to="/login">
          Login
        </Link>
      )}
    </Navbar>
  );
}
