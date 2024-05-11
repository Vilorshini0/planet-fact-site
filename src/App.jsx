import { Outlet } from "react-router-dom"
import "./scss/app.css"

function App() {

  return (
    <section className="app">
        <Outlet />
    </section>
  )
}

export default App
