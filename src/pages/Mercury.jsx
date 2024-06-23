import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-mercury.svg'
import imgPlanetInternal from '../assets/planet-mercury-internal.svg'
import ViewSwitcherMobile from "../component/ViewSwitcherMobile"
import ViewSwitcherDesktop from "../component/ViewSwitcherDesktop"
import imgPlanetSurface from '../assets/geology-mercury.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Mercury() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    const pageStatus = useSelector(state => state.appState.pageStatus)
    const mercury = data[0]

    const pageStatusMapping = {
        overview: {
            content: mercury.overview.content,
            source: mercury.overview.source,
            img: imgPlanet
        },
        structure: {
            content: mercury.structure.content,
            source: mercury.structure.source,
            img: imgPlanetInternal
        },
        geology: {
            content: mercury.geology.content,
            source: mercury.geology.source,
            img: imgPlanet
        }
    }

    return (
        <main className="planet planet-mercury">
            {/* Mobile */}
            {screenWidth <= 640 && <ViewSwitcherMobile planetName={mercury.name} />}

            <section className="planet__main-section">
                <section className="planet__main-section_visual">
                    <img className="planet-visual" src={pageStatusMapping[pageStatus]?.img} />
                </section>
                {pageStatus === 'geology' && <img className="planet-geology" src={imgPlanetSurface} />}

                <section className="description-switcher-wrapper">
                    <PlanetDescription
                        planetName={mercury.name}
                        description={pageStatusMapping[pageStatus]?.content || ''}
                        source={pageStatusMapping[pageStatus]?.source || ''}
                    />

                    {/* Tablet/desktop */}
                    {screenWidth > 640 && <ViewSwitcherDesktop planetName={mercury.name} />}
                </section>
            </section>

            <PlanetCharacteristics
                rotationTime={mercury.rotation}
                revolutionTime={mercury.revolution}
                radius={mercury.radius}
                temperature={mercury.temperature}
            />
        </main>
    )
}