import React from "react"
import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-neptune.svg'
import imgPlanetInternal from '../assets/planet-neptune-internal.svg'
import imgPlanetSurface from '../assets/geology-neptune.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Neptune() {
  const screenWidth = useSelector(state => state.appState.screenWidth)
  const [pageStatus, setPageStatus] = React.useState('overview')
  const neptune = data[6]

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
      <main className="planet-neptune">
    {/* Mobile */}
    {screenWidth <= 768 &&
      <section>
        <button onClick={() => setPageStatus('overview')} className={pageStatus === 'overview' ? 'active' : undefined }>Overview</button>
        <button onClick={() => setPageStatus('structure')} className={pageStatus === 'structure' ? 'active' : undefined }>Structure</button>
        <button onClick={() => setPageStatus('geology')} className={pageStatus === 'geology' ? 'active' : undefined }>Surface</button>
      </section>
    }

    <img className="planet-visual" src={pageStatusMapping[pageStatus]?.img} />
    {pageStatus === 'geology' && <img src={imgPlanetSurface} />}

    <PlanetDescription
      planetName={neptune.name}
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
      rotationTime={neptune.rotation}
      revolutionTime={neptune.revolution}
      radius={neptune.radius}
      temperature={neptune.temperature}
    />
  </main>
  )
}