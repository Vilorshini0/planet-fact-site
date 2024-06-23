import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-earth.svg'
import imgPlanetInternal from '../assets/planet-earth-internal.svg'
import ViewSwitcherMobile from "../component/ViewSwitcherMobile"
import ViewSwitcherDesktop from "../component/ViewSwitcherDesktop"
import imgPlanetSurface from '../assets/geology-earth.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Earth() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    const pageStatus = useSelector(state => state.appState.pageStatus)
    const earth = data[2]

    const pageStatusMapping = {
        overview: {
            content: earth.overview.content,
            source: earth.overview.source,
            img: imgPlanet
        },
        structure: {
            content: earth.structure.content,
            source: earth.structure.source,
            img: imgPlanetInternal
        },
        geology: {
            content: earth.geology.content,
            source: earth.geology.source,
            img: imgPlanet
        }
    }

    return (
        <main className="planet planet-earth">
            {/* Mobile */}
            {screenWidth <= 640 && <ViewSwitcherMobile planetName={earth.name} />}

            <section className="planet__main-section">
                <section className="planet__main-section_visual">
                    <section className="planet-visual-grouped">  
                        <img className="planet-visual" src={pageStatusMapping[pageStatus]?.img} />
                        {pageStatus === 'geology' && <img className="planet-geology" src={imgPlanetSurface} />}
                    </section>
                </section>

                <section className="description-switcher-wrapper">
                    <PlanetDescription
                        planetName={earth.name}
                        description={pageStatusMapping[pageStatus]?.content || ''}
                        source={pageStatusMapping[pageStatus]?.source || ''}
                    />

                    {/* Tablet/desktop */}
                    {screenWidth > 640 && <ViewSwitcherDesktop planetName={earth.name} />}
                </section>
            </section>

            <PlanetCharacteristics
                rotationTime={earth.rotation}
                revolutionTime={earth.revolution}
                radius={earth.radius}
                temperature={earth.temperature}
            />
        </main>
    )
}