import React from "react"
import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-jupiter.svg'
import imgPlanetInternal from '../assets/planet-jupiter-internal.svg'
import imgPlanetSurface from '../assets/geology-jupiter.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Jupiter() {
  const screenWidth = useSelector(state => state.appState.screenWidth)
  const [pageStatus, setPageStatus] = React.useState('overview')
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
      <main className="planet-jupiter">
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
      planetName={jupiter.name}
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
      rotationTime={jupiter.rotation}
      revolutionTime={jupiter.revolution}
      radius={jupiter.radius}
      temperature={jupiter.temperature}
    />
  </main>
  )
}