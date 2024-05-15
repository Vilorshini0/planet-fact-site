import React from "react"
import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-mercury.svg'
import imgPlanetInternal from '../assets/planet-mercury-internal.svg'
import imgPlanetSurface from '../assets/geology-mercury.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Mercury() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    const [pageStatus, setPageStatus] = React.useState('overview')
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
        <main className="planet-mercury">
      {/* Mobile */}
      {screenWidth <= 768 &&
        <section>
          <button onClick={() => setPageStatus('overview')} className={pageStatus === 'overview' ? 'active' : undefined }>Overview</button>
          <button onClick={() => setPageStatus('structure')} className={pageStatus === 'structure' ? 'active' : undefined }>Structure</button>
          <button onClick={() => setPageStatus('geology')} className={pageStatus === 'geology' ? 'active' : undefined }>Surface</button>
        </section>
      }

      <img src={pageStatusMapping[pageStatus]?.img} />
      {pageStatus === 'geology' && <img src={imgPlanetSurface} />}

      <PlanetDescription
        planetName={mercury.name}
        description={pageStatusMapping[pageStatus]?.content || ''}
        source={pageStatusMapping[pageStatus]?.source || ''}
      />

      {/* Tablet/desktop */}
      {screenWidth > 768 &&
        <section>
          <button onClick={() => setPageStatus('overview')} className={pageStatus === 'overview' ? 'active' : undefined }>Overview</button>
          <button onClick={() => setPageStatus('structure')} className={pageStatus === 'structure' ? 'active' : undefined }>Internal Structure</button>
          <button onClick={() => setPageStatus('geology')} className={pageStatus === 'geology' ? 'active' : undefined }>Surface</button>
        </section>
      }

      <PlanetCharacteristics
        rotationTime={mercury.rotation}
        revolutionTime={mercury.revolution}
        radius={mercury.radius}
        temperature={mercury.temperature}
      />
    </main>
    )
}