import "./App.scss";
import Accueil from "./components/global/accueil/Accueil";
import Login from "./components/authentification/login/Login";
import Register from "./components/authentification/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import NewProduct from "./components/products/newProduct";
import ShowProduct from "./components/products/ShowProduct";
import NewCategory from "./components/category/newCategory";
import ListProduct from "./components/products/listProduct";
import EditProduct from "./components/products/editProduct";
import Cart from './components/cart/Cart';
import ListCategory from "./components/category/ListCategory";
import EditCategory from "./components/category/editCategory";
import Profile from "./components/Profile";
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
        },
        {
          path: 'edit/:id',
          element: <MainLayout><EditProduct/></MainLayout>
        },
        {
          path: ':id',
          element: <MainLayout><ShowProduct/></MainLayout>
        }
      ]
    },
    {
      path : "categorys",
      children : [
        {
          path: "",
          element: <MainLayout><ListCategory/></MainLayout>,
        },
        {
          path: 'add',
          element: <MainLayout><NewCategory/></MainLayout>
        },
        {
          path: 'edit/:id',
          element: <MainLayout><EditCategory/></MainLayout>
        }
      ]
    },
    {
      path: "cart",
      element: <MainLayout><Cart/></MainLayout>,

    },
    {
      path: "profile",
      element: <MainLayout><Profile/></MainLayout>,
    }
  ]);

  return <RouterProvider router={router} />;
}
