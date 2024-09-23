import { remove } from "../api/category";



export default function CardCategory({ category }){
    const { _id, name, description } = category;

    return (
        <div className="w-72 text-black bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-2">
            <h1 className="text-lg font-bold text-center">{name}</h1>
            <p className="w-full text-sm text-start pt-2">{description}</p>
            <div className="w-full flex flex-row items-center justify-end space-x-4">
                <button className="bg-lime-600 text-white text-sm font-bold py-1 px-2 rounded-lg mt-4">
                    <a href={`/categorys/edit/${_id}`}>UPDATE</a>
                </button>
                <a onClick={() => {remove(_id)}}>
                    <button className="bg-red-400 text-white text-sm font-bold py-1 px-2 rounded-lg mt-4">
                        DELETE
                    </button>
                </a>
            </div>
        </div>
    )
}