import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import Lottie from "lottie-react";
import SignIn from "./pages/SignIn";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./privateRoute/PrivateRoute";
import AddEquipment from "./pages/AddEquipment";
import AllSportsEquipment from "./pages/AllSportsEquipment";
import Details from "./pages/Details";
import MyEquipments from "./pages/MyEquipments";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Products from "./components/Home/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://sports-equipment-store-server-sable.vercel.app/equipments"
          ),
        children: [
          {
            path: "/",
            element: <Products></Products>,
          },
          {
            path: "/:category",
            element: <Products></Products>,
            loader: ({ params }) =>
              fetch(
                `https://sports-equipment-store-server-sable.vercel.app/equipments/${params.category}`
              ),
          },
        ],
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-sports-equipment",
        element: <AllSportsEquipment></AllSportsEquipment>,
        loader: () =>
          fetch(
            "https://sports-equipment-store-server-sable.vercel.app/equipments"
          ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sports-equipment-store-server-sable.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/user/equipments/:id",
        element: (
          <PrivateRoute>
            <MyEquipments></MyEquipments>
          </PrivateRoute>
        ),
      },
      {
        path: "/user/equipment/:id/edit",
        element: (
          <PrivateRoute>
            <Edit></Edit>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sports-equipment-store-server-sable.vercel.app/equipment/${params.id}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" />
    </AuthProvider>
    <Lottie />
  </StrictMode>
);
