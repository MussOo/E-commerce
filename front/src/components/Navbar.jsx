import { Link } from "react-router-dom";
import { AuthContext } from '../context/contextAuth.jsx';
import { CartContext } from '../context/contextCart.jsx';
import { useContext } from "react";


export default function Navbar() {
    const { user, context_logout } = useContext(AuthContext);
    const { cart } = useContext(CartContext);

    return (
        <nav className="w-11/12 rounded-lg border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                        <Link 
                            to='/'
                            >
                                ACCUEIL
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 md:dark:text-white">
                        <Link 
                            to='/products'
                            >
                                PRODUCTS
                            </Link>
                        </a>
                    </li>
                    {
                        user && user.role === 'admin' ? (
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 md:dark:text-white">
                                <Link 
                                    to='/categorys'
                                    >
                                        CATEGORY
                                    </Link>
                                </a>
                            </li>
                        ) : null
                    }
                    
                </ul>
            </div>
            <div className="flex flex-row space-x-4 items-center">
                <div className="relative inline-block text-left">
                    <Link to={'/cart'} className="block w-16 h-16 relative">
                    <img src="https://img.icons8.com/?size=100&id=59997&format=png&color=000000" alt="" className="w-16 h-16 rounded-full" />
                    </Link>
                    <div className="absolute bottom-0 right-0 block w-8 h-8 bg-green-400 border-2 border-white rounded-full text-black text-center font-bold">
                    {cart ? cart.length : "0"}
                    </div>
                </div>
                {
                    user ? (
                        <button onClick={() => {context_logout()}} className="h-8 m-0 inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-red-600 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600">
                        DECONNEXION
                        </button>
                    ) : (
                        <a className=" h-8 inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600">
                    <Link
                        to="/login"
                        className="block w-full h-full"
                    >
                    CONNEXION
                    </Link>

                </a>
                    )
                }
            </div>
        </div>
        </nav>
    )
}