import "./App.scss";
import Accueil from "./components/global/accueil/Accueil";
import Login from "./components/authentification/login/Login";
import Register from "./components/authentification/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import NewProduct from "./components/products/newProduct";
import NewCategory from "./components/category/newCategory";
import ListProduct from "./components/products/listProduct";
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
      element: <Login />,
    },
    {
      path : "products",
      children : [ 
        {
          path: "",
          element: <MainLayout><ListProduct/></MainLayout>,
        },
        {
          path: 'add',
          element: <MainLayout><NewProduct/></MainLayout>
        }
      ]
    },
    {
      path : "categorys",
      children : [
        {
          path: 'add',
          element: <MainLayout><NewCategory/></MainLayout>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
