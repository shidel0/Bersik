import Login from "Components/components/Login";
import React from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css";
const LoginPage = () => {
  return (
    <div>
      <h4>Login</h4>
      <Login />
      <p>
        Or <Link to="/register">registration</Link>
      </p>
    </div>
  );
};

export default LoginPage;
