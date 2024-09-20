import axios from "axios";
import Swal from "sweetalert2";

export async function create(
    name,
    description,
    price,
    images,
    category,
    stock,
){
    return await axios
    .post("http://localhost:3000/product", {
        name: name,
        description: description,
        price: price,
        images: images,
        category: category,
        stock: stock,
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
    }
)
    .then(() => {
        window.location.href = "/products";
    })
    .catch(() => {
        Swal.fire({
            title: "Erreur",
            text: "Une erreur est survenue",
            icon: "error",
            timer: 2000,
        })
        .then(() => {
            window.location.href = "/products/add";
        });
    });
}

export async function getAll() {
    return await axios
    .get("http://localhost:3000/product");
}

export async function getOne(id) {
    return await axios
    .get(`http://localhost:3000/product/${id}`);
}

export async function update(
    id,
    name,
    description,
    price,
    images,
    category,
    stock,
){
    return await axios
    .put(`http://localhost:3000/product/${id}`, {
            name: name,
            description: description,
            price: price,
            images: images,
            category: category,
            stock: stock,
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        }
    )
    .then(() => {
        Swal.fire({
            title: "Produit modifié",
            icon: "success",
            timer: 1000,
        })
        .then(() => {
            window.location.href = "/products";
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
            window.location.href = "/products/add";
        });
    });
}

export async function remove(id) {
    return await axios
    .delete(`http://localhost:3000/product/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        }
    )
    .then(() => {
        Swal.fire({
            title: "Produit supprimé",
            icon: "success",
            timer: 1000,
        })
        .then(() => {
            window.location.href = "/products";
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
            window.location.href = "/products/add";
        });
    });
}

export async function search(name) {
    return await axios
    .get(`http://localhost:3000/product/search/${name}`)
    .then((response) => {
        return response.data;
    })
    .catch(() => {
        Swal.fire({
            title: "Erreur",
            text: "Une erreur est survenue",
            icon: "error",
            timer: 2000,
        });
    });
}
