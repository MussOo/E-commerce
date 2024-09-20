import { useContext, useEffect, useState } from "react"
import { getAll } from "../../api/product"
import Swal from "sweetalert2";
import CardProducts from "../CardProducts";
import { AuthContext } from '../../context/contextAuth';


export default function ListProduct() {
    const { user } = useContext(AuthContext);
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log("useEffect")
        getAll()
        .then((data) => {
            setProducts(data.data)
        })
        .catch((error) => {
            console.log("error", error)
        });

    }, [])


    return (
        <div className="w-11/12 m-auto h-[100vh] flex flex-col items-center justify-start space-y-32 mt-20">
            {
                user && user.role === 'admin' ? (
                    <div className="w-full flex flex-row justify-start ">
                    <button 
                        className="bg-lime-600 text-white text-sm font-bold py-2 px-4 rounded-lg"
                        >
                        <a
                        href="/products/add"
                        >
                        AJOUTER UN PRODUIT
                        </a>
                    </button>
                    </div>
                ) : null
            }
            <div className="w-full flex flex-row items-center justify-center space-x-5">
                <input type="text"  className="w-full h-12 border-2 text-black border-gray-300 rounded-lg p-4 placeholder-gray-500 placeholder:font-bold placeholder:tracking-wider focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg" 
                 placeholder="Rechercher un produit"/>
                 <a onClick={() => {console.log('search')}} className="bg-white h-12 w-12 rounded-lg flex items-center justify-center">
                 <img src="https://img.icons8.com/?size=100&id=112468&format=png&color=1A1A1A" alt="search" className="w-10 h-10"/>
                 </a>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-start gap-10">
                {
                    products.map((product) => {
                        return <CardProducts product={product} key={product._id} />
                    })
                }
            </div>
        </div>
    )
}