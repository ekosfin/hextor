import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
const BASE_LOCATION =
  process.env.REACT_APP_BACKEND_URL ||
  window.location.protocol + "//" + window.location.hostname;

export default function SendPost() {
  const { currentUser, setUpdate } = useAuth();
  const postTextRef = useRef();
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  async function postData(url, data) {
    return fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setInfo("");

    if (String(postTextRef.current.value).length > 129) {
      return setError("Post cannot be more than 128 charachters long");
    }

    try {
      setLoading(true);
      await postData(BASE_LOCATION + "/posts", {
        user: currentUser.uid,
        content: postTextRef.current.value,
        author: currentUser.displayName,
      }).then((response) => {
        if (response.message === "Added") {
          postTextRef.current.value = "";
          setLoading(false);
          setUpdate(true);
          return setInfo("Posted");
        } else {
          //for debugging
          console.log(response);
          return setError("There was an error");
        }
      });
    } catch {
      setError("Failed to log in");
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Submit post</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        {info && <Alert variant="primary">{info}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="post">
            <Form.Control
              type="postText"
              ref={postTextRef}
              as="textarea"
              rows={3}
              required
            />
          </Form.Group>
          <Button disabled={loading} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
