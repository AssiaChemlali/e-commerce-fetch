

import { createBrowserRouter, RouterProvider } from "react-router"
import { lazy } from "react"

// pages
const Home = lazy(() => import("./pages/Home"))
const Shop = lazy(() => import('./pages/Shop.jsx'))
const Products = lazy(() => import('./pages/Products'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const AddProduct = lazy(() => import("./pages/AddProduct.jsx"))
const EditProduct = lazy(() => import("./pages/EditProduct.jsx"))
const Cart = lazy(() => import("./pages/Cart.jsx"))
const Checkout = lazy(() => import("./pages/Checkout.jsx"))
const Wishlist = lazy(() => import("./pages/Wishlist.jsx"))
const LogOut = lazy(() => import("./pages/LogOut.jsx"))

import MainLayout from "./layouts/MainLayout"
import { Suspense } from "react"
import LoadingPage from "./pages/LoadingPage.jsx"
import Error from "./pages/Error.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Suspense fallback={<LoadingPage />}><Home /></Suspense> },
      { path: "shop", element: <Suspense fallback={<LoadingPage />}><Shop /></Suspense> },
      { path: "products", element: <Suspense fallback={<LoadingPage />}><Products /></Suspense> },
      { path: "products/add", element: <Suspense fallback={<LoadingPage />}><AddProduct /></Suspense> },
      { path: "products/:id/edit", element: <Suspense fallback={<LoadingPage />}><EditProduct /></Suspense> },
      { path: "login", element: <Suspense fallback={<LoadingPage />}><Login /></Suspense> },
      { path: "logout", element: <Suspense fallback={<LoadingPage />}><LogOut /></Suspense> },
      { path: "signup", element: <Suspense fallback={<LoadingPage />}><Register /></Suspense> },
      { path: "cart", element: <Suspense fallback={<LoadingPage />}><Cart /></Suspense> },
      { path: "checkout", element: <Suspense fallback={<LoadingPage />}><Checkout /></Suspense> },
      { path: "wishlist", element: <Suspense fallback={<LoadingPage />}><Wishlist /></Suspense> },
    ]
  }
])


function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
