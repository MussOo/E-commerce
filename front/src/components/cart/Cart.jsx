import { useContext } from "react"
import { CartContext } from "../../context/contextCart"
import ItemCart from "./ItemCart";
import { create } from "../../api/order";
import { AuthContext } from "../../context/contextAuth" 

export default function Cart() {
    const { user } = useContext(AuthContext);
    const { cart, context_removeAll } = useContext(CartContext);

    const submit = (e) => {
        e.preventDefault();
        let data = {
            user : user._id,
            orderItems: cart.map(item => ({
                product: item._id,
                name: item.name,
                quantity: item.qty,
                price: item.price
            })),
            shippingAddress : {
                address: e.target[0].value,
                city: e.target[1].value,
                postalCode: e.target[2].value,
                country: e.target[3].value
            },
            paymentMethod: 'bank',
            taxPrice : 20,
            shippingPrice: 0,
            totalPrice: cart.reduce((acc, item) => acc + item.price * item.qty, 0) + 20,
            isPaid: false,
            isDelivered: false,
        }
        console.log(data);
        create(data);
    }
    return (
        <div className=" h-full flex flex-col items-center space-y-4 w-11/12">
            <h1 className="text-5xl font-bold">
                PANIER</h1>

            <div className="flex flex-col md:flex-row w-full space-x-4">
                <div className="md:w-1/2 flex flex-col space-y-4 p-4">
                <button className="bg-black text-white p-4 rounded-lg w-full disabled:opacity-25" disabled={cart.length === 0} onClick={context_removeAll}>Vider le panier</button> 
                {
                    cart && cart.map((product, index) => (
                        <ItemCart key={index} product={product} />
                    ))
                }
                </div>
                <div className="md:w-1/2">
                    <div className="bg-white text-black p-4 flex flex-col space-y-4" onSubmit={submit}>
                        <div className="flex flex-col space-y-48">
                            <form action="" className="flex flex-col space-y-4 p-4 text-black">
                                <h2 className="text-start text-xl font-bold ">
                                    ADDRESS DE LIVRAISON
                                    </h2>
                                <div className="flex flex-col space-y-4">
                                    <input type="text" placeholder="Adresse" className="p-2 rounded-lg border-2 text-black" />
                                    <input type="text" placeholder="Ville" className="p-2 rounded-lg border-2" />
                                    <input type="text" placeholder="Code postal" className="p-2 rounded-lg border-2" />
                                    <input type="text" placeholder="Pays" className="p-2 rounded-lg border-2" />
                                </div>
                            <h2 className="text-2xl font-bold ">Récapitulatif</h2>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-lg">Total</p>
                                <p className="text-lg">{cart.reduce((acc, item) => acc + item.price * item.qty, 0)} €</p>
                            </div>
                            <input type="submit" value="COMMANDER" className="bg-black text-white p-4 rounded-lg w-full disabled:opacity-25" disabled={cart.length === 0} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}