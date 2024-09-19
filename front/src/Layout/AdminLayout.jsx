import { useContext } from "react"
import { AuthContext } from "../context/contextAuth";

export default function AdminLayout({children}){
    const { user } = useContext(AuthContext);

    if(user.role !== "admin"){
        return null;
    }
    return (
        children
    )
}