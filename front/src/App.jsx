import "./App.scss";
import Accueil from "./components/global/accueil/Accueil";
import Login from "./components/authentification/login/Login";
import Register from "./components/authentification/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      index: true,
      element: <MainLayout><Accueil /></MainLayout>,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} />;
}
