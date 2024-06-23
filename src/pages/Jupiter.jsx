import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-jupiter.svg'
import imgPlanetInternal from '../assets/planet-jupiter-internal.svg'
import ViewSwitcherMobile from "../component/ViewSwitcherMobile"
import ViewSwitcherDesktop from "../component/ViewSwitcherDesktop"
import imgPlanetSurface from '../assets/geology-jupiter.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Jupiter() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    const pageStatus = useSelector(state => state.appState.pageStatus)
    const jupiter = data[4]

    const pageStatusMapping = {
        overview: {
            content: jupiter.overview.content,
            source: jupiter.overview.source,
            img: imgPlanet
        },
        structure: {
            content: jupiter.structure.content,
            source: jupiter.structure.source,
            img: imgPlanetInternal
        },
        geology: {
            content: jupiter.geology.content,
            source: jupiter.geology.source,
            img: imgPlanet
        }
    }

    return (
        <main className="planet planet-jupiter">
            {/* Mobile */}
            {screenWidth <= 640 && <ViewSwitcherMobile planetName={jupiter.name} />}

            <section className="planet__main-section">
                <section className="planet__main-section_visual">
                    <section className="planet-visual-grouped">
                        <img className="planet-visual" src={pageStatusMapping[pageStatus]?.img} />
                        {pageStatus === 'geology' && <img className="planet-geology" src={imgPlanetSurface} />}
                    </section>
                </section>

                <section className="description-switcher-wrapper">
                    <PlanetDescription
                        planetName={jupiter.name}
                        description={pageStatusMapping[pageStatus]?.content || ''}
                        source={pageStatusMapping[pageStatus]?.source || ''}
                    />

                    {/* Tablet/desktop */}
                    {screenWidth > 640 && <ViewSwitcherDesktop planetName={jupiter.name} />}
                </section>
            </section>

            <PlanetCharacteristics
                rotationTime={jupiter.rotation}
                revolutionTime={jupiter.revolution}
                radius={jupiter.radius}
                temperature={jupiter.temperature}
            />
        </main>
    )
}