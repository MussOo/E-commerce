import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/contextCart";
import { check_stock } from "../../api/product";



export default function ItemCart({product}){
    const [error_code, set_error_code] = useState("");
    const [realQty, setRealQty] = useState(0);
    const {_id, name, price, qty, image } = product;
    const { context_addOne, context_removeOne, context_removeFromCart } = useContext(CartContext); 


    useEffect(() => {
        check_stock(_id, qty)
        .then((response) => {
            setRealQty(response.data.real_qty);
            set_error_code(response.data.error_code);
        })
        }, [product]);


    return (
        <div key={_id} className="bg-white text-black flex justify-between items-center flex-wrap px-8 py-4 rounded-lg">   
            <img src={image} alt="" className="w-20 h-20" />
            <div className="flex flex-col">
                <h2>{name}
                </h2>
                <p className=" text-start">
                    {price} €</p>
                <p className=" text-start">

                {
                    error_code === 601 ? (
                        <div className=" flex items-center text-start text-sm">
                            <div className=" bottom-0 right-0 block w-8 h-8 bg-gray-400 border-2 border-white rounded-full text-black text-center font-bold">
                        
                        </div>
                        <span> PRODUIT NON TROUVE </span>
                        
                        </div>
                    )
                    : error_code === 602 ? (
                        <div className=" flex items-center text-start text-sm">
                            <div className=" bottom-0 right-0 block w-8 h-8 bg-red-400 border-2 border-white rounded-full text-black text-center font-bold">
                        
                        </div>
                        <span> RUPTURE DE STOCK </span>
                        
                        </div>
                    )
                    : (
                        <div className=" flex items-center text-start text-sm">
                            <div className=" bottom-0 right-0 block w-8 h-8 bg-green-400 border-2 border-white rounded-full text-black text-center font-bold">
                        
                        </div>
                        <span> EN STOCK : {realQty} </span>
                        
                        </div>
                    )
                    }
                </p>
            </div>
            <div className="flex flex-row items-center space-x-4 ">
                <button className="border-2 px-4 border-black bg-black text-white text-2xl disabled:opacity-50"
                onClick={() => {
                    context_removeOne(product);
                }} 
                disabled={qty === 1}
                >
                    -
                </button>
                <span>{qty}</span>
                <button className="border-2 px-4 bg-black text-white text-2xl disabled:opacity-50"
                onClick={() => {
                    context_addOne(product);
                }} 
                disabled={qty === realQty || error_code === 602}
                >
                    +
                    </button>
            </div>
            <div className="flex ">
                <a onClick={() => {
                    context_removeFromCart(product);
                }} >
                    <img src="https://img.icons8.com/?size=40&id=102350&format=png&color=000000" alt="" />
                </a>
            </div>
        </div>
    )
}