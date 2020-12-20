import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [username, setUsername] = useState();
  const [update, setUpdate] = useState(false);
  const [updateName, setUpdateName] = useState(false);
  const [loading, setLoading] = useState(true);

  function signup(email, password, username) {
    let createdUser = auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          user.user.updateProfile({
            displayName: username,
          });
          setUsername(username);
          setLoading(true);
          setUpdateName(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return createdUser;
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updateUsername(username) {
    setUsername(username);
    return currentUser.updateProfile({ displayName: username });
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setUsername(user ? user.displayName : "nobody");
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateUsername,
    username,
    update,
    setUpdate,
    updateName,
    setUpdateName,
    setUsername,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
