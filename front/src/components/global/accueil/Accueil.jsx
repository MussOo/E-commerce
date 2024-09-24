import React, { useContext } from "react";
import CardProducts from "../../CardProducts";
import Landing_image from "../../../../public/img/landing.png";
import { AuthContext } from "../../../context/contextAuth";
import { Link } from "react-router-dom";

export default function Accueil() {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-11/12 mx-auto bg-gray-50 text-gray-900 p-4 rounded-lg">
      <div className="h-80 flex flex-row w-4/5 m-auto items-center justify-center p-4">
        <div className="w-1/2 flex flex-col items-start justify-center ">
          <span className="text-5xl text-start font-semibold">
            Des produits a vendre ? 
          </span>
          <span className="text-base opacity-70 text-start font-semibold">
            creer toi un compte et commence a vendre
          </span>
          {
            user && user.role === 'user' ? (
              <div className="w-full flex flex-row flex-wrap justify-start space-x-2 ">
                  <button type="button" className=" mt-5 inline-flex items-center rounded-lg bg-[#145c9e] text-white px-4 py-2 text-sm font-semibold  hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                    </svg>
                    <Link
                        to="/products"
                        className="block w-full h-full"
                    >
                      VOIR LES PRODUITS
                    </Link>
                  </button>
              </div>
                  
            ) : user && user.role === "admin" ? (

              <div className="w-full flex flex-row flex-wrap justify-start space-x-2 ">
                  <button type="button" className=" mt-5 inline-flex items-center rounded-lg bg-[#145c9e] text-white px-4 py-2 text-sm font-semibold  hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                    </svg>
                    <Link
                        to="/products/add"
                        className="block w-full h-full"
                    >
                      AJOUTER UN PRODUIT
                    </Link>
                  </button>
              </div>
            ): 
            (

          <button type="button" className=" mt-5   inline-flex items-center rounded-lg bg-[#145c9e] text-white px-4 py-2 text-sm font-semibold  hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          <Link to="/register" className="block w-full h-full">
            CREER UN COMPTE
          </Link>
        </button>
        
            )
          }
        </div>
        <div className="w-1/2 flex items-center justify-center">
        <img src={Landing_image} alt="" className="w-96 h-full"/>
        </div>
      </div>
    </div>
  );
}
