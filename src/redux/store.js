import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice"

export default configureStore({
    reducer: {
        appState: appSlice
    }
})