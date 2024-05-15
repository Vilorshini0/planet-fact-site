import React from "react"
import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-earth.svg'
import imgPlanetInternal from '../assets/planet-earth-internal.svg'
import imgPlanetSurface from '../assets/geology-earth.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Earth() {
  const screenWidth = useSelector(state => state.appState.screenWidth)
  const [pageStatus, setPageStatus] = React.useState('overview')
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
      <main className="planet-earth">
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
      planetName={earth.name}
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
      rotationTime={earth.rotation}
      revolutionTime={earth.revolution}
      radius={earth.radius}
      temperature={earth.temperature}
    />
  </main>
  )
}