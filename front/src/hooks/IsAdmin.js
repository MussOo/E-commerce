
import { useContext } from "react";
import { AuthContext } from "../context/contextAuth";

export default function IsAdmin() {
    const { user } = useContext(AuthContext);
    if (!user || user.role !== "admin") {
        window.location.href = "/";
    }
    return 0;
}