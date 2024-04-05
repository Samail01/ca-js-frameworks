import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Cart } from "./routes/Cart/Cart.jsx";
import { Checkout } from "./routes/Checkout/Checkout.jsx";
import { Specific } from "./routes/Specific/Specific.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { Contact } from "./routes/Contact/Contact.jsx";

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
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/specific/:id",
        element: <Specific />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
