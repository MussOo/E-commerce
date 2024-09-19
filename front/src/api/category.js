

import axios from "axios";
import Swal from "sweetalert2";

axios.defaults = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
};

export async function create(name, description){
  return await axios
    .post("http://localhost:3000/category",
      {
        name: name,
        description: description,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
        if (response.status !== 201) {
            Swal.fire({
            title: "Erreur",
            text: "Une erreur est survenue",
            icon: "error",
        });
    }

    Swal.fire({
      title: "Categorie ajoutée",
      icon: "success",
      timer: 1500,
    })
    .then (() => {
      window.location.href = "/";
    });

    })
    .catch(() => {
        Swal.fire({
            title: "Erreur",
            text: "Une erreur est survenue",
            icon: "error",
            timer: 2000,
        })
        .then(() => {
            window.location.href = "/categorys/add";
        } );
    });

}
