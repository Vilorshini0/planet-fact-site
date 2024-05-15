import { createRoot } from 'react-dom/client'
import App from "./App"
import store from "./redux/store"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mercury from "./pages/Mercury"
import Venus from "./pages/Venus"
import Earth from "./pages/Earth"
import Mars from "./pages/Mars"
import Jupiter from "./pages/Jupiter"
import Saturn from "./pages/Saturn"
import Uranus from "./pages/Uranus"
import Neptune from "./pages/Neptune"

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
      },
      {
        path: "/earth",
        element: <Earth />,
      },
      {
        path: "/mars",
        element: <Mars />,
      },
      {
        path: "/jupiter",
        element: <Jupiter />,
      },
      {
        path: "/saturn",
        element: <Saturn />,
      },
      {
        path: "/uranus",
        element: <Uranus />,
      },
      {
        path: "/neptune",
        element: <Neptune />,
      }
    ],
  }
])

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);