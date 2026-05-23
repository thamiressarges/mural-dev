import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Admin } from "./pages/admin"
import { Login } from "./pages/login"
import { Project } from "./pages/projects"
import { Error } from "./pages/Error"

import { Private } from "./routes/Private"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Private><Admin/></Private>
  },
  {
    path: '/admin/projects',
    element: <Private><Project/></Private>
  },

  {
    path: "*",
    element: <Error/>
  }
])

export {router}
