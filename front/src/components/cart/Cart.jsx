import { useContext, useEffect } from "react"
import { CartContext } from "../../context/contextCart"
import ItemCart from "./ItemCart";



export default function Cart() {
    const { cart, remove } = useContext(CartContext);


    useEffect(() => {
        console.log('cart', cart);
    }, [cart])
    return (
        <div className=" h-full flex flex-col items-center space-y-4 w-11/12">
            <h1 className="text-5xl font-bold">
                PANIER</h1>

            <div className="flex flex-row w-full space-x-4">
                <div className="w-1/2 flex flex-col space-y-4 p-4">
                {
                    cart && cart.map((product, index) => (
                        <ItemCart key={index} product={product} />
                    ))
                }
                </div>
                <div className="w-1/2">
                    <div className="bg-white text-black p-4 flex flex-col space-y-4">
                        <div className="flex flex-col space-y-48">
                            <form action="" className="flex flex-col space-y-4 p-4 text-black">
                                <h2 className="text-start text-2xl font-bold underline">
                                    Adresse de livraison</h2>
                                <div className="flex flex-col space-y-4">
                                    <input type="text" placeholder="Adresse" className="p-2 rounded-lg border-2 text-black" />
                                    <input type="text" placeholder="Ville" className="p-2 rounded-lg border-2" />
                                    <input type="text" placeholder="Code postal" className="p-2 rounded-lg border-2" />
                                    <input type="text" placeholder="Pays" className="p-2 rounded-lg border-2" />
                                </div>
                                <div className="flex flex-col space-y-4 mt-4">
                                    <h2 className="text-start text-2xl font-bold underline">Moyen de paiement</h2>
                                    <div className="flex flex-col space-y-4">
                                        <input type="text" placeholder="Nom sur la carte" className="p-2 rounded-lg border-2" />
                                        <input type="text" placeholder="Numéro de carte" className="p-2 rounded-lg border-2" />
                                        <input type="text" placeholder="Date d'expiration (Ex : XX/XX)" className="p-2 rounded-lg border-2" />
                                        <input type="text" placeholder="Crypto" className="p-2 rounded-lg w-2/12 border-2" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <h2 className="text-2xl font-bold ">Récapitulatif</h2>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-lg">Total</p>
                            <p className="text-lg">{cart.reduce((acc, item) => acc + item.price * item.qty, 0)} €</p>
                        </div>
                        <button className="bg-black text-white p-4 rounded-lg w-full" onClick={remove}>Vider le panier</button>
                    </div>
                </div>
            </div>
        </div>
    )   
}