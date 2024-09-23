

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
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
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
      window.location.href = "/categorys";
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

export async function getAll() {
  return await axios
    .get("http://localhost:3000/category");
}

export async function getOne(id) {
  return await axios
    .get(`http://localhost:3000/category/${id}`);
}

export async function update(id, name, description) {
  return await axios
    .put(`http://localhost:3000/category/${id}`,
        {
          name: name,
          description: description,
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        }
      )
    .then((response) => {
      if (response.status !== 200) {
        Swal.fire({
          title: "Erreur",
          text: "Une erreur est survenue",
          icon: "error",
        });
      }

      Swal.fire({
        title: "Categorie modifiée",
        icon: "success",
        timer: 1500,
      })
      .then(() => {
        window.location.href = "/categorys";
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
        window.location.href = `/categorys/${id}`;
      });
    });
}

export async function remove(id) {
  return await axios
    .delete(`http://localhost:3000/category/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
      if (response.status !== 200) {
        Swal.fire({
          title: "Erreur",
          text: "Une erreur est survenue",
          icon: "error",
        });
      }

      Swal.fire({
        title: "Categorie supprimée",
        icon: "success",
        timer: 1500,
      })
      .then(() => {
        window.location.href = "/categorys";
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
        window.location.href = "/";
      });
    });
}

export default { create, getAll, getOne, update, remove };