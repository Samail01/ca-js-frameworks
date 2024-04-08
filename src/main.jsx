import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Specific } from "./routes/Specific/Specific.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { Contact } from "./routes/Contact/Contact.jsx";
import { CartProvider } from "./hook/useCartContext.jsx";
import { CheckoutSuccessPage } from "./routes/Success/CheckoutSuccessPage.jsx";
import { CartPage } from "./routes/Cart/CartPage.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/specific/:id",
        element: <Specific />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout-success",
        element: <CheckoutSuccessPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </CartProvider>
  </React.StrictMode>
);
