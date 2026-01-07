

import { createBrowserRouter, RouterProvider } from "react-router"
import { Provider } from "react-redux"
import store from "./store/store.js"
import { lazy } from "react"
// pages
import Home from "./pages/Home"
import Shop from './pages/Shop.jsx'
const  Products= lazy(()=>import ('./pages/Products')) 
import Login from './pages/Login'
import Register from './pages/Register'
import AddProduct from "./pages/AddProduct.jsx"

import MainLayout from "./layouts/MainLayout"
import { Suspense } from "react"
import EditProduct from "./pages/EditProduct.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "products", element:<Suspense fallback="loading page ..."><Products /></Suspense>  },
      { path: "products/add", element: <AddProduct /> },
      { path: "products/:id/edit", element: <EditProduct /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ]
  }
])


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  )
}

export default App
