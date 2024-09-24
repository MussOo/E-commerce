
import { useContext } from "react";
import { AuthContext } from "../context/contextAuth";

export default function RequireAuth() {
    const { user } = useContext(AuthContext);
    if (!user) {
        window.location.href = '/login';
    }
    return 0;
}