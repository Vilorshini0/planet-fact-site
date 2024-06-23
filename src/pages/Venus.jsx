import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-venus.svg'
import imgPlanetInternal from '../assets/planet-venus-internal.svg'
import ViewSwitcherMobile from "../component/ViewSwitcherMobile"
import ViewSwitcherDesktop from "../component/ViewSwitcherDesktop"
import imgPlanetSurface from '../assets/geology-venus.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Venus() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
        const pageStatus = useSelector(state => state.appState.pageStatus)
        const venus = data[6]

        const pageStatusMapping = {
            overview: {
                content: venus.overview.content,
                source: venus.overview.source,
                img: imgPlanet
            },
            structure: {
                content: venus.structure.content,
                source: venus.structure.source,
                img: imgPlanetInternal
            },
            geology: {
                content: venus.geology.content,
                source: venus.geology.source,
                img: imgPlanet
            }
        }

        return (
            <main className="planet planet-venus">
                {/* Mobile */}
                {screenWidth <= 640 && <ViewSwitcherMobile planetName={venus.name} />}

                <section className="planet__main-section">
                    <section className="planet__main-section_visual">
                        <img className="planet-visual" src={pageStatusMapping[pageStatus]?.img} />
                    </section>
                    {pageStatus === 'geology' && <img className="planet-geology" src={imgPlanetSurface} />}

                    <section className="description-switcher-wrapper">
                        <PlanetDescription
                            planetName={venus.name}
                            description={pageStatusMapping[pageStatus]?.content || ''}
                            source={pageStatusMapping[pageStatus]?.source || ''}
                        />

                        {/* Tablet/desktop */}
                        {screenWidth > 640 && <ViewSwitcherDesktop planetName={venus.name} />}
                    </section>
                </section>

                <PlanetCharacteristics
                    rotationTime={venus.rotation}
                    revolutionTime={venus.revolution}
                    radius={venus.radius}
                    temperature={venus.temperature}
                />
            </main>
        )
}