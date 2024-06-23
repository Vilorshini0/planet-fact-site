import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-neptune.svg'
import imgPlanetInternal from '../assets/planet-neptune-internal.svg'
import ViewSwitcherMobile from "../component/ViewSwitcherMobile"
import ViewSwitcherDesktop from "../component/ViewSwitcherDesktop"
import imgPlanetSurface from '../assets/geology-neptune.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Neptune() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    const pageStatus = useSelector(state => state.appState.pageStatus)
    const neptune = data[7]

    const pageStatusMapping = {
        overview: {
            content: neptune.overview.content,
            source: neptune.overview.source,
            img: imgPlanet
        },
        structure: {
            content: neptune.structure.content,
            source: neptune.structure.source,
            img: imgPlanetInternal
        },
        geology: {
            content: neptune.geology.content,
            source: neptune.geology.source,
            img: imgPlanet
        }
    }

    return (
        <main className="planet planet-neptune">
            {/* Mobile */}
            {screenWidth <= 640 && <ViewSwitcherMobile planetName={neptune.name} />}

            <section className="planet__main-section">
                <section className="planet__main-section_visual">
                    <section className="planet-visual-grouped">  
                        <img className="planet-visual" src={pageStatusMapping[pageStatus]?.img} />
                        {pageStatus === 'geology' && <img className="planet-geology" src={imgPlanetSurface} />}
                    </section>
                </section>

                <section className="description-switcher-wrapper">
                    <PlanetDescription
                        planetName={neptune.name}
                        description={pageStatusMapping[pageStatus]?.content || ''}
                        source={pageStatusMapping[pageStatus]?.source || ''}
                    />

                    {/* Tablet/desktop */}
                    {screenWidth > 640 && <ViewSwitcherDesktop planetName={neptune.name} />}
                </section>
            </section>

            <PlanetCharacteristics
                rotationTime={neptune.rotation}
                revolutionTime={neptune.revolution}
                radius={neptune.radius}
                temperature={neptune.temperature}
            />
        </main>
    )
}