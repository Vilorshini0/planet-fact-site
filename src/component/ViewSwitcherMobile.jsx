import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { updatePageStatus } from "../redux/appSlice"

export default function ViewSwitcherMobile(props) {

    const dispatch = useDispatch()
    const pageStatus = useSelector(state => state.appState.pageStatus)

    return (
        <section className='view-switcher-mobile'>
            <div className={pageStatus === 'overview' ? 'view-switcher--active' : undefined }>
                <button onClick={() => dispatch(updatePageStatus({pageStatus: 'overview'}))}>Overview</button>
                <span className={props.planetName}></span>
            </div>
            <div className={pageStatus === 'structure' ? 'view-switcher--active' : undefined }>
                <button onClick={() => dispatch(updatePageStatus({pageStatus: 'structure'}))}>Structure</button>
                <span className={props.planetName}></span>
            </div>
            <div className={pageStatus === 'geology' ? 'view-switcher--active' : undefined }>
                <button onClick={() => dispatch(updatePageStatus({pageStatus: 'geology'}))}>Surface</button>
                <span className={props.planetName}></span>
            </div>
        </section>
    )
}