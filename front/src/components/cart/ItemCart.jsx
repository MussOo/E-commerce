import { useContext } from "react";
import { CartContext } from "../../context/contextCart";



export default function ItemCart({product}){

    const {_id, name, price, qty, image } = product;
    const { context_addOne, context_removeOne, context_removeFromCart } = useContext(CartContext); 

    return (
        <div key={_id} className="bg-white text-black flex justify-between items-center px-8 py-4 rounded-lg">  
        <img src={image} alt="" className="w-20 h-20" />
        <div className="flex flex-col">
            <h2>{name}</h2>
            <p className=" text-start">
                {price} €</p>
        </div>
        <div className="flex flex-row items-center space-x-4">
            <button className="border-2 px-4 border-black" onClick={() => {
                context_removeOne(product);
            }} >
                -
            </button>
            <span>{qty}</span>
            <button className="border-2 px-4 border-black" onClick={() => {
                context_addOne(product);
            }} >
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