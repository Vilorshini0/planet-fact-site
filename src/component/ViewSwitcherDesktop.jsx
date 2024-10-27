import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import { updatePageStatus } from "../redux/appSlice"

export default function ViewSwitcherDesktop(props) {

    const dispatch = useDispatch()
    const pageStatus = useSelector(state => state.appState.pageStatus)

    return (
        <section className='view-switcher-desktop'>
            <div className={pageStatus === 'overview' ? props.planetName : undefined }>
                <button onClick={() => dispatch(updatePageStatus({pageStatus: 'overview'}))}>
                    <span>01</span>
                    Overview
                </button>
            </div>

            <div className={pageStatus === 'structure' ? props.planetName : undefined }>
                <button onClick={() => dispatch(updatePageStatus({pageStatus: 'structure'}))}>
                    <span>02</span>
                    Internal Structure
                </button>
            </div>

            <div className={pageStatus === 'geology' ? props.planetName : undefined }>
                <button onClick={() => dispatch(updatePageStatus({pageStatus: 'geology'}))}>
                    <span>03</span>
                    Surface
                </button>
            </div>
        </section>
    )
}

// Define propTypes
ViewSwitcherDesktop.propTypes = {
    planetName: PropTypes.string.isRequired,
};