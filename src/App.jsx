import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { updateState } from "./redux/appSlice"
import "./scss/app.css"
import HeaderMobile from "./layout/HeaderMobile"
import HeaderDesktop from "./layout/HeaderDesktop"

function App() {
  /* Notes */
  // const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
  // window.addEventListener("resize", handleWindowResize)
  // function handleWindowResize() {
  //     setScreenWidth(window.innerWidth)
  // }

  const dispatch = useDispatch()
  const screenWidth = useSelector(state => state.appState.screenWidth)

  window.addEventListener("resize", handleWindowResize)
  
  function handleWindowResize() {
    dispatch(updateState({screenWidth: window.innerWidth}))
  }

  return (
    <section className="app">
      {screenWidth <= 768 ? <HeaderMobile /> : <HeaderDesktop />}
      <Outlet />
    </section>
  )
}

export default App
