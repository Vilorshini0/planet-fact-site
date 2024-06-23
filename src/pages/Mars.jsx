import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-mars.svg'
import imgPlanetInternal from '../assets/planet-mars-internal.svg'
import ViewSwitcherMobile from "../component/ViewSwitcherMobile"
import ViewSwitcherDesktop from "../component/ViewSwitcherDesktop"
import imgPlanetSurface from '../assets/geology-mars.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Mars() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    const pageStatus = useSelector(state => state.appState.pageStatus)
    const mars = data[3]

    const pageStatusMapping = {
        overview: {
            content: mars.overview.content,
            source: mars.overview.source,
            img: imgPlanet
        },
        structure: {
            content: mars.structure.content,
            source: mars.structure.source,
            img: imgPlanetInternal
        },
        geology: {
            content: mars.geology.content,
            source: mars.geology.source,
            img: imgPlanet
        }
    }

    return (
        <main className="planet planet-mars">
            {/* Mobile */}
            {screenWidth <= 640 && <ViewSwitcherMobile planetName={mars.name} />}

            <section className="planet__main-section">
                <section className="planet__main-section_visual">
                    <img className="planet-visual" src={pageStatusMapping[pageStatus]?.img} />
                </section>
                {pageStatus === 'geology' && <img className="planet-geology" src={imgPlanetSurface} />}

                <section className="description-switcher-wrapper">
                    <PlanetDescription
                        planetName={mars.name}
                        description={pageStatusMapping[pageStatus]?.content || ''}
                        source={pageStatusMapping[pageStatus]?.source || ''}
                    />

                    {/* Tablet/desktop */}
                    {screenWidth > 640 && <ViewSwitcherDesktop planetName={mars.name} />}
                </section>
            </section>

            <PlanetCharacteristics
                rotationTime={mars.rotation}
                revolutionTime={mars.revolution}
                radius={mars.radius}
                temperature={mars.temperature}
            />
        </main>
    )
}