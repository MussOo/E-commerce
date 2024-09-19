import Accueil from "../components/global/accueil/Accueil";
import Login from "../components/authentification/login/Login";
import Register from "../components/authentification/register/Register";
import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../hooks/RequireAuth";

export default createBrowserRouter([
  {
    path: "/",
    exact: true,
    index: true,
    element: <Accueil />,
    loader: RequireAuth,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
    action: async ({ request }) => {
      console.log(request.formData());
      return request;
    },
  },
  {
    path: "admin",
    element: <div>Admin</div>,
    loader: RequireAuth,
  }
]);
