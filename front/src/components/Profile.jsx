import { useEffect, useState } from "react"
import { getOrders } from "../api/order"
import CardOrder from "./CardOrder"


export default function Profile() {
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        getOrders().then(response => {
            if(response.status === 200){
                setOrders(
                    response.data.map(order => {
                        return (
                            <CardOrder order={order} key={order._id}/>
                        )
                    })  
                )
            }

            
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="flex flex-col items-center w-11/12">
            <h1>Profile</h1>
            <div className="flex flex-col md:flex-row justify-evenly flex-wrap w-full">
                <div className="w-full md:w-3/6 bg-white text-black p-4 rounded-md">
                    <h2 className="text-start text-xl font-semibold">COMMANDE PASSE</h2>
                    <div className="flex flex-col">
                        {orders}
                    </div>
                </div>
                <div className="w-full md:w-2/6 bg-white text-black rounded-md">
                <h2 className="text-center text-xl font-semibold">Information personnel</h2>
                </div>
            </div>
        </div>
    )
}