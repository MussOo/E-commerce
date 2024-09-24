import { Form } from "react-router-dom";
import "./login.scss";
import { login } from "../../../api/Login";
import { useContext } from "react";
import { AuthContext } from "../../../context/contextAuth";
import Swal from "sweetalert2";

export default function Login() {
  const { context_login } = useContext(AuthContext);

  const Submit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
    
    .then(function (response) {
      if(response.status === 200){
        context_login(response.data.token, response.data.user);
        Swal.fire({
          title: "Success",
          text: "You are connected",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        })
        .then(() => {
          window.location.href = "/";
        });

      }else{
        Swal.fire({
          title: "Error",
          text: "Email or password incorrect",
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
        <h3>Login</h3>
        <Form method="post" onSubmit={Submit}>
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit" className="login_button">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}
