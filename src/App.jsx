import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { updateState, updatePageStatus } from "./redux/appSlice"
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
    const location = useLocation()
    const screenWidth = useSelector(state => state.appState.screenWidth)

    // Reset pageStatus to "overview" when navigating to another page
    React.useEffect(() => {
        dispatch(updatePageStatus({pageStatus: 'overview'}))
    }, [location]);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize)
    }, []);

    function handleWindowResize() {
        let newBodyWidth = document.querySelector("body").offsetWidth
        
        if (newBodyWidth && newBodyWidth != undefined && newBodyWidth != screenWidth) {
            dispatch(updateState({screenWidth: newBodyWidth}))
        }
    }

    return (
        <section className="app">
            {screenWidth <= 640 ? <HeaderMobile /> : <HeaderDesktop />}
            <Outlet />
        </section>
    )
}

export default App