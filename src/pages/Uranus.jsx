import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-uranus.svg'
import imgPlanetInternal from '../assets/planet-uranus-internal.svg'
import ViewSwitcherMobile from "../component/ViewSwitcherMobile"
import ViewSwitcherDesktop from "../component/ViewSwitcherDesktop"
import imgPlanetSurface from '../assets/geology-uranus.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Uranus() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    const pageStatus = useSelector(state => state.appState.pageStatus)
    const uranus = data[6]

    const pageStatusMapping = {
        overview: {
            content: uranus.overview.content,
            source: uranus.overview.source,
            img: imgPlanet
        },
        structure: {
            content: uranus.structure.content,
            source: uranus.structure.source,
            img: imgPlanetInternal
        },
        geology: {
            content: uranus.geology.content,
            source: uranus.geology.source,
            img: imgPlanet
        }
    }

    return (
        <main className="planet planet-uranus">
            {/* Mobile */}
            {screenWidth <= 640 && <ViewSwitcherMobile planetName={uranus.name} />}

            <section className="planet__main-section">
                <section className="planet__main-section_visual">
                    <img className="planet-visual" src={pageStatusMapping[pageStatus]?.img} />
                </section>
                {pageStatus === 'geology' && <img className="planet-geology" src={imgPlanetSurface} />}

                <section className="description-switcher-wrapper">
                    <PlanetDescription
                        planetName={uranus.name}
                        description={pageStatusMapping[pageStatus]?.content || ''}
                        source={pageStatusMapping[pageStatus]?.source || ''}
                    />

                    {/* Tablet/desktop */}
                    {screenWidth > 640 && <ViewSwitcherDesktop planetName={uranus.name} />}
                </section>
            </section>

            <PlanetCharacteristics
                rotationTime={uranus.rotation}
                revolutionTime={uranus.revolution}
                radius={uranus.radius}
                temperature={uranus.temperature}
            />
        </main>
    )
}