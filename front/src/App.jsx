import "./App.scss";
import Accueil from "./components/global/accueil/Accueil";
import Login from "./components/authentification/login/Login";
import Register from "./components/authentification/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import NewProduct from "./components/products/newProduct";

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
    },
    {
      path : "products",
      children : [ 
        {
          path: "",
          element: <MainLayout><div>LIST PRODUCTS</div></MainLayout>,
        },
        {
          path: 'add',
          element: <MainLayout><NewProduct/></MainLayout>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
