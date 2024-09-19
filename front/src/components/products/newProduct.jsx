


export default function NewProduct() {


    return (
        <div className="w-90 m-auto h-[100vh] flex flex-col items-center justify-center">
        <span className="text-4xl text-start font-semibold">
           AJOUTER UN PRODUIT
        </span>
            <form action="">
                <div className="w-full flex flex-col items-start justify-center  ">
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="name" className="text-base font-semibold">Nom du produit</label>
                        <input type="text" name="name" id="name" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="description" className="text-base font-semibold">Description</label>
                        <textarea name="description" id="description" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="price" className="text-base font-semibold">Prix</label>
                        <input type="number" name="price" id="price" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="images" className="text-base font-semibold">Images</label>
                        <input type="file" name="images" id="images" className="text-blackw-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="category" className="text-base font-semibold">Categorie</label>
                        <input type="text" name="category" id="category" className=" text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <label htmlFor="stock" className="text-base font-semibold">Stock</label>
                        <input type="number" name="stock" id="stock" className="text-black w-full p-2 border border-gray-400 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center space-y-2 mt-5">
                        <button type="submit" className="text-black bg-[#145c9e] text-white p-2 rounded-lg">Ajouter</button>
                    </div>
                </div>

            </form>
        </div>
    )
}