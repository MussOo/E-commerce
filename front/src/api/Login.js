import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from '../context/contextAuth.jsx';
import { useContext } from "react";

axios.defaults = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
};

export function login(email, password) {
  return axios
    .post("http://localhost:3000/login",
      {
        email: email,
        password: password,
      }
    );
}


export function register(name, email, password, role) {
  return axios
    .post("http://localhost:3000/register",
      {
        name: name,
        email: email,
        password: password,
        role: role,
      });
}
