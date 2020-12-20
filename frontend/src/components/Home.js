import React, { useEffect, useState } from "react";
import Post from "./Post";
import Send from "./SendPost";
import { useAuth } from "../contexts/AuthContext";
const BASE_LOCATION =
  window.location.protocol + "//" + process.env.REACT_APP_BACKEND_URL ||
  window.location.hostname;

export default function Home() {
  const { currentUser, update, setUpdate } = useAuth();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(BASE_LOCATION + "/posts/10", {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUpdate(false);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          console.log(error);
          setError(error);
        }
      );
  }, [update]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {currentUser && <Send />}
        {items.body &&
          items.body.map((d) => (
            <Post key={d._id} title={d.author} text={d.content} />
          ))}
      </>
    );
  }
}
