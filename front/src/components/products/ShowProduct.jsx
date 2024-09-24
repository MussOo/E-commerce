import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../api/product";
import { CartContext } from "../../context/contextCart";

export default function ShowProduct() {
    const { context_addToCart } = useContext(CartContext);
    const [ product, setProduct ] = useState({})
    const { id } = useParams();
 
    useEffect(() => {
        getOne(id)
        .then((response) => {
            if(response.status === 200) {
                console.log(response.data[0]);
                setProduct(response.data[0])
            }
        })
        .catch((error) => {
            console.log(error)
        })

    }, [id])
    return (
        <div className="w-11/12">
            <div className="w-full h-screen flex flex-row flex-wrap justify-center items-center" >
                <div className="w-full md:w-1/2">
                    <img 
                    src={product.images ? product.images[0] : ''} 
                    alt="" 
                    className="w-full object-cover rounded-lg"
                    />
                </div >
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                <div className="bg-white p-9 flex flex-col justify-evenly rounded-lg shadow-lg text-black w-10/12 space-y-4">
                <h2 className="text-start text-3xl font-bold">
                    {product.name}
                </h2>
                <p className="text-gray-500 text-base text-justify">
                    {product.description}
                </p>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-gray-800 text-sm font-bold">
                        EN STOCK : {' '}
                        {product.stock}
                    </p>
                    <p className="text-3xl font-bold">
                        {product.price} €
                    </p>
                </div>
                <button 
                className="bg-black text-white p-2 rounded-lg w-full font-bold hover:scale-105 transition-transform ease-in-out duration-300"
                onClick={
                    () => {
                      context_addToCart({
                        _id: product._id,
                        name: product.name,
                        price: product.price,
                        image: product.images[0],
                        qty: 1,
                        realQty: product.qty
                      });
                    }
                  }
                >
                    Ajouter au panier
                </button>
                </div>
                </div>
            </div>

        </div>
    )
}