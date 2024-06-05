import PropTypes from 'prop-types'
import wikiIcon from '../assets/icon-source.svg'

export default function PlanetDescription(props) {
    return (
        <section className='planet-description'>
            <h1>{props.planetName}</h1>      
            <p>{props.description}</p>
            <p className="link">
                Source: <a href={props.source}>Wikipedia </a>
                <img src={wikiIcon} alt="" />
            </p>
        </section>
    )
}

// Define propTypes
PlanetDescription.propTypes = {
    planetName: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.string
};