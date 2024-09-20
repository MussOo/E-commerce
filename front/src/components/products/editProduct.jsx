import { useEffect, useState } from "react";
import { getAll } from "../../api/category"
import { create, getOne, update } from "../../api/product"
import Swal from "sweetalert2";



export default function EditProduct() {
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get('id');
    
    const [product, setProduct] = useState({});
    const [categories_options, setCategories_options] = useState([]);

    useEffect(() => {
        getOne(id).then((response) => {
            if(response.status === 200){
                setProduct(response.data[0])
            }
        })
        .catch(() => {
            Swal.fire({
                title: "Erreur",
                text: "Une erreur est survenue",
                icon: "error",
                timer: 2000
            })
            .then(() => {
                window.location.href = "/products"
            })
        });

        getAll().then((response) => {
            setCategories_options(response.data.map((category, k) => {
                return (
                    <option key={k} value={category._id} selected={category._id === product.category} >{category.name}</option>
                )
            }))
        })
        .catch(() => {
            Swal.fire({
                title: "Erreur",
                text: "Une erreur est survenue",
                icon: "error",
            });
        });
    }, [id])

    const createSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const images = e.target.images.value;
        const category = e.target.category.value;
        const stock = e.target.stock.value;
        update(product._id, name, description, price, images, category, stock)
    }
    return (
        <div className="w-90 m-auto h-[100vh] flex flex-col items-center justify-center">
        <span className="text-4xl text-start font-semibold">
           MODIFICATION DU PRODUIT  <br />
           ({product.name})
        </span>
            <form action=""  onSubmit={createSubmit}>
                <div className="w-full flex flex-col items-start justify-center  ">
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="name" className="text-base font-semibold">Nom du produit</label>
                        <input type="text" defaultValue={product.name} name="name" id="name" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="description" className="text-base font-semibold">Description</label>
                        <textarea name="description" defaultValue={product.description} id="description" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="price" className="text-base font-semibold">Prix</label>
                        <input type="number" name="price" defaultValue={product.price} id="price" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="images" className="text-base font-semibold">Images (url)</label>
                        <input type="text" name="images" defaultValue={product.images} id="images" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="category" className="text-base font-semibold">Categorie</label>
                        <select name="category" id="category" className="text-black w-full p-2 border border-gray-400 rounded-lg">
                            {categories_options}
                        </select>
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="stock" className="text-base font-semibold">Stock</label>
                        <input type="number" name="stock" id="stock" defaultValue={product.stock}  className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <button type="submit" className="text-black bg-[#145c9e] text-white p-2 rounded-lg">Ajouter</button>
                    </div>
                </div>

            </form>
        </div>
    )
}