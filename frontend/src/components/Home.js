import React from "react";
import { Button, Card, CardDeck, Container } from "react-bootstrap";
import Hextorbar from "./Hextorbar";

export default function Home() {
  return (
    <>
      <Container>
        <Hextorbar />

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
