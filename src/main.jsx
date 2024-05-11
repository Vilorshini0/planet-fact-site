import React from "react"
import { createRoot } from 'react-dom/client'
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mercury from "./pages/Mercury"
import Venus from "./pages/Venus"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Mercury />,
      },
      {
        path: "/venus",
        element: <Venus />,
      }
    ],
  }
])

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);