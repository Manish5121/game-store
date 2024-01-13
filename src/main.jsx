import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./components/Home/Home.jsx"
import Store from "./components/Store/Store.jsx"
import Cart from "./components/Cart/Cart.jsx"
import { ClerkProvider } from "@clerk/clerk-react"
import { dark } from "@clerk/themes"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "store", element: <Store /> },
      { path: "cart", element: <Cart /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    appearance={{
      baseTheme: dark,
    }}
  >
    <RouterProvider router={router} />
  </ClerkProvider>
)
