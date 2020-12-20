import React from "react";
import { Card } from "react-bootstrap";

export default function Post(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
