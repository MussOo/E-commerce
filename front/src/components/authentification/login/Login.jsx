import { Form } from "react-router-dom";
import "./login.scss";
import React from "react";
import { login } from "../../../api/Login";

export default function Login() {

  const Submit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password);
  }
  
  return (
    <div className="main">
      <div className="container_login text-black">
        <h3>Login</h3>
        <Form method="post" onSubmit={Submit}>
          <input type="text" name="email" value={'root@root.com'} placeholder="email" />
          <input type="password" name="password" value={'root'} placeholder="password" />
          <button type="submit" className="login_button">
            Login
          </button>
          <button className="register_button">Register</button>
        </Form>
      </div>
    </div>
  );
}
