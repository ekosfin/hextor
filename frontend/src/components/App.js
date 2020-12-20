import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Hextorbar from "./Hextorbar";

function App() {
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <AuthProvider>
          <div className="w-100">
            <Hextorbar />
            <Switch>
              <PublicRoute restricted={false} exact path="/" component={Home} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PublicRoute
                restricted={true}
                exact
                path="/signup"
                component={Signup}
              />
              <PublicRoute
                restricted={true}
                exact
                path="/login"
                component={Login}
              />
              <PublicRoute
                restricted={true}
                exact
                path="/forgot-password"
                component={ForgotPassword}
              />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
