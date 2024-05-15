import React from "react"
import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-mars.svg'
import imgPlanetInternal from '../assets/planet-mars-internal.svg'
import imgPlanetSurface from '../assets/geology-mars.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Mars() {
  const screenWidth = useSelector(state => state.appState.screenWidth)
  const [pageStatus, setPageStatus] = React.useState('overview')
  const mars = data[3]

  const pageStatusMapping = {
      overview: {
      content: mars.overview.content,
      source: mars.overview.source,
      img: imgPlanet
      },
      structure: {
      content: mars.structure.content,
      source: mars.structure.source,
      img: imgPlanetInternal
      },
      geology: {
      content: mars.geology.content,
      source: mars.geology.source,
      img: imgPlanet
      }
  }

  return (
      <main className="planet-mars">
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
      planetName={mars.name}
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
      rotationTime={mars.rotation}
      revolutionTime={mars.revolution}
      radius={mars.radius}
      temperature={mars.temperature}
    />
  </main>
  )
}