import PropTypes from 'prop-types'

export default function PlanetCharacteristics(props) {
    return (
        <section>
            <div className="rotation-time">
                <p>Rotation time</p>
                <p>{props.rotationTime}</p>
            </div>
            <div className="revolution-time">
                <p>Revolution time</p>
                <p>{props.revolutionTime}</p>
            </div>
            <div className="radius">
                <p>Radius</p>
                <p>{props.radius}</p>
            </div>
            <div className="temperature">
                <p>Average temp.</p>
                <p>{props.temperature}</p>
            </div>
        </section>
    )
}

// Define propTypes
PlanetCharacteristics.propTypes = {
    rotationTime: PropTypes.string,
    revolutionTime: PropTypes.string,
    radius: PropTypes.string,
    temperature: PropTypes.string,
};