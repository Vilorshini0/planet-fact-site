import wikiIcon from '../assets/icon-source.svg'

export default function PlanetDescription(props) {
    return (
        <section>
            <h1>{props.planetName}</h1>      
            <p>{props.description}</p>
            <p className="link">
                Source: <a href={props.source}>Wikipedia </a>
                <img src={wikiIcon} alt="" />
            </p>
        </section>
    )
}