import { useState } from "react"
import { deleteOrder } from "../api/order"



export default function CardOrder({ order }) {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className="flex flex-col text-black border-2 border-black p-4 m-4">
            <span className=" text-start font-semibold text-sm">
                COMMANDE N° : {order._id}
            </span>
            <span className=" my-2">
                <h2 className=" text-start font-semibold text-base">
                    PRODUITS <button onClick={() => setShowDetails(!showDetails)} className="text-blue-500 underline text-xl">(Détails {showDetails ? '-' : '+'})</button>
                </h2>
                <ul className={'border-2 p-1' + (showDetails ? ' block' : ' hidden')}>
                    {
                        order.orderItems.map(product => {
                            return (
                                <li key={product._id} className="text-start border-b-2 border-b-gray-400 p-2">
                                    <span className="italic">{product.name}</span>  <strong>x {product.quantity}</strong>
                                </li>
                            )
                        })
                    }
                </ul>
            </span>
            <span className=" text-start font-semibold text-base">
                CREATION : {new Date(order.createdAt).toLocaleDateString()}
                </span>
            <span className=" text-start font-semibold text-base">
                TOTAL : {order.totalPrice} € <br />
                LIVRAISON : {order.shippingPrice} €
            </span>
            <span className=" text-start font-semibold text-base">
                STATUT : {
                    !order.isDelivered ? 'En cours de livraison' : 'Livré'
                }
            </span>
            <div className="w-full bg-red-500 my-2 ">
                <button className="w-full text-white font-semibold flex justify-center items-center p-1 " onClick={() => {deleteOrder(order._id)}}>
                    <img src="https://img.icons8.com/?size=30&id=67884&format=png&color=FFFFFF" alt="" />
                </button>
            </div>
        </div>
    )
}