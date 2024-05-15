import React from "react"
import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-venus.svg'
import imgPlanetInternal from '../assets/planet-venus-internal.svg'
import imgPlanetSurface from '../assets/geology-venus.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Venus() {
  const screenWidth = useSelector(state => state.appState.screenWidth)
  const [pageStatus, setPageStatus] = React.useState('overview')
  const venus = data[1]

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
    <main className="planet-venus">
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
        planetName={venus.name}
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
        rotationTime={venus.rotation}
        revolutionTime={venus.revolution}
        radius={venus.radius}
        temperature={venus.temperature}
      />
    </main>
  )
}