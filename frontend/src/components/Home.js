import React from "react";
import { Button, Card, Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container>
        <Card style={{ flex: 1 }}>
          <Card.Body>
            <Card.Title>Home</Card.Title>
            <Card.Text>Temp things for testing</Card.Text>
            <Button>Do stuff</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
