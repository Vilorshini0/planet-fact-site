import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-saturn.svg'
import imgPlanetInternal from '../assets/planet-saturn-internal.svg'
import ViewSwitcherMobile from "../component/ViewSwitcherMobile"
import ViewSwitcherDesktop from "../component/ViewSwitcherDesktop"
import imgPlanetSurface from '../assets/geology-saturn.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Saturn() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    const pageStatus = useSelector(state => state.appState.pageStatus)
    const saturn = data[5]

    const pageStatusMapping = {
        overview: {
            content: saturn.overview.content,
            source: saturn.overview.source,
            img: imgPlanet
        },
        structure: {
            content: saturn.structure.content,
            source: saturn.structure.source,
            img: imgPlanetInternal
        },
        geology: {
            content: saturn.geology.content,
            source: saturn.geology.source,
            img: imgPlanet
        }
    }

    return (
        <main className="planet planet-saturn">
            {/* Mobile */}
            {screenWidth <= 640 && <ViewSwitcherMobile planetName={saturn.name} />}

            <section className="planet__main-section">
                <section className="planet__main-section_visual">
                    <img className="planet-visual" src={pageStatusMapping[pageStatus]?.img} />
                </section>
                {pageStatus === 'geology' && <img className="planet-geology" src={imgPlanetSurface} />}

                <section className="description-switcher-wrapper">
                    <PlanetDescription
                        planetName={saturn.name}
                        description={pageStatusMapping[pageStatus]?.content || ''}
                        source={pageStatusMapping[pageStatus]?.source || ''}
                    />

                    {/* Tablet/desktop */}
                    {screenWidth > 640 && <ViewSwitcherDesktop planetName={saturn.name} />}
                </section>
            </section>

            <PlanetCharacteristics
                rotationTime={saturn.rotation}
                revolutionTime={saturn.revolution}
                radius={saturn.radius}
                temperature={saturn.temperature}
            />
        </main>
    )
}