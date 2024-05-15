import React from "react"
import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-saturn.svg'
import imgPlanetInternal from '../assets/planet-saturn-internal.svg'
import imgPlanetSurface from '../assets/geology-saturn.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Saturn() {
  const screenWidth = useSelector(state => state.appState.screenWidth)
  const [pageStatus, setPageStatus] = React.useState('overview')
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
      <main className="planet-saturn">
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
      planetName={saturn.name}
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
      rotationTime={saturn.rotation}
      revolutionTime={saturn.revolution}
      radius={saturn.radius}
      temperature={saturn.temperature}
    />
  </main>
  )
}