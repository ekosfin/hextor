import React from "react";
import { Card, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Hextorbar from "./Hextorbar";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="w-100">
        <Hextorbar />
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                <div>
                  <strong>Email:</strong> {currentUser.email}
                </div>
                <div>
                  <strong>Username:</strong> {currentUser.displayName}
                </div>
                <Link
                  to="/update-profile"
                  className="btn btn-primary w-100 mt-3"
                >
                  Update Profile
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
