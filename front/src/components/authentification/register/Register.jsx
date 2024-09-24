import React from "react";
import { register } from "../../../api/Login";
import Swal from "sweetalert2";

export default function Register() {

  const Submit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;

    register(name, email, password, role)
      .then(function (response) {
        if (response.status === 201) {
          Swal.fire({
            title: "Success",
            text: "You are registered",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.href = "/login";
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Email already exists",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.reload();
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="main">
      <div className="container_login text-black">
        <h3 className="text-center font-semibold text-white text-4xl">
          REGISTER</h3>
        <form method="post" onSubmit={Submit} className="space-y-4">
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <select name="role" id="role" className="text-black w-full p-2 border border-gray-400 rounded-lg">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button className="register_button">Register</button>
        </form>
      </div>
    </div>
  );
}
