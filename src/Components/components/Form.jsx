import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Form = ({ handleClick, title }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <TextField
        label="Outlined secondary"
        color="secondary"
        focused
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <TextField
        label="Outlined secondary"
        color="secondary"
        focused
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />

      <Button
        navigate="/"
        variant="contained"
        color="success"
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </Button>
    </div>
  );
};

export default Form;
