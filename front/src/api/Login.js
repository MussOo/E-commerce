import axios from "axios";
import Swal from "sweetalert2";

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
    )
    .then(function (response) {
      if(response.status === 200){
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
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
