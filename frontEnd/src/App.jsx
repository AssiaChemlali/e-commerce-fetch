
import MainLayout from "./layouts/MainLayout"
import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Shop from './pages/Shop.jsx'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import { Provider } from "react-redux"
import store from "./store/store.js"
import AddProduct from "./pages/AddProduct.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "products", element: <Products /> },
      { path: "products/add", element: <AddProduct /> },
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
