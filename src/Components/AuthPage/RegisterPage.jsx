import React from "react";
import SignUp from "Components/components/SignUp";
import { Link } from "react-router-dom";
import "./AuthPage.css";
const RegisterPage = () => {
  return (
    <div>
      <h4>Registration</h4>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
