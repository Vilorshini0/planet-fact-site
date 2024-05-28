import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { updatePageStatus } from "../redux/appSlice"

export default function ViewSwitcherDesktop(props) {

    const dispatch = useDispatch()
    const pageStatus = useSelector(state => state.appState.pageStatus)

    return (
        <section className='view-switcher-desktop'>
            <button 
                onClick={() => dispatch(updatePageStatus({pageStatus: 'overview'}))} 
                className={pageStatus === 'overview' ? props.planetName : undefined }
            >
                Overview
            </button>

            <button 
                onClick={() => dispatch(updatePageStatus({pageStatus: 'structure'}))} 
                className={pageStatus === 'structure' ? props.planetName : undefined }
            >
                Internal Structure
            </button>

            <button 
                onClick={() => dispatch(updatePageStatus({pageStatus: 'geology'}))} 
                className={pageStatus === 'geology' ? props.planetName : undefined }
            >
                Surface
            </button>
        </section>
    )
}