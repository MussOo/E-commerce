import { create } from "../../api/category";


export default function NewCategory(){

    const SendCategory = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        create(name, description);
        
    }
    return (

        <div className="w-90 m-auto h-[100vh] flex flex-col items-center justify-center">
        <span className="text-4xl text-start font-semibold">
           AJOUTER UNE CATEGORIE
        </span>
            <form action="" onSubmit={SendCategory}>
                <div className="w-full flex flex-col items-start justify-center  ">
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="name" className="text-base font-semibold">Nom de la categorie</label>
                        <input type="text" name="name" id="name" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="description" className="text-base font-semibold">Description</label>
                        <textarea name="description" id="description" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <button type="submit" className="text-black bg-[#145c9e] text-white text-base font-bold p-2 rounded-lg">AJOUTER</button>
                    </div>
                </div>

            </form>
        </div>

    )
}