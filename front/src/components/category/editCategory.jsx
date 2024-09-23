import { useEffect, useState } from "react";
import { getOne, update } from "../../api/category"
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export default function EditCategory() {
    const { id } = useParams();
    const [category, setCategory] = useState({});

    useEffect(() => {
        getOne(id).then((response) => {
            if(response.status === 200){
                setCategory(response.data)
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
                window.location.href = "/categorys"
            })
        });

    }, [id])

    const createSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        update(category._id, name, description)
    }
    return (
        <div className="w-90 m-auto h-[100vh] flex flex-col items-center justify-center">
        <span className="text-4xl text-start font-semibold">
           MODIFICATION DU CATEGORY  <br />
           ({category ? category.name : "Chargement..."} )
        </span>
            <form action=""  onSubmit={createSubmit}>
                <div className="w-full flex flex-col items-start justify-center  ">
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="name" className="text-base font-semibold">Nom du produit</label>
                        <input type="text" defaultValue={category.name} name="name" id="name" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="description" className="text-base font-semibold">Description</label>
                        <textarea name="description" defaultValue={category.description} id="description" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <button type="submit" className="text-black bg-[#145c9e] text-white p-2 rounded-lg">MODIFIER</button>
                    </div>
                </div>

            </form>
        </div>
    )
}