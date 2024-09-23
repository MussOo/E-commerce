import { useContext, useEffect, useState } from "react"
import { getAll, remove } from "../../api/category"
import { AuthContext } from '../../context/contextAuth';
import CardCategory from "../CardCategory";


export default function ListCategory() {
    const { user } = useContext(AuthContext);
    
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        getAll()
        .then((data) => {
            setCategorys(data.data)
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
                        href="/categorys/add"
                        >
                        AJOUTER UNE CATEGORIE
                        </a>
                    </button>
                    </div>
                ) : null
            }
            <div className="w-full flex flex-row flex-wrap justify-start gap-10">
                {
                    categorys.map((cat) => {
                        return <CardCategory category={cat} key={cat._id} />
                    })
                }
            </div>
        </div>
    )
}