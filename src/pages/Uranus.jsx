import React from "react"
import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-uranus.svg'
import imgPlanetInternal from '../assets/planet-uranus-internal.svg'
import imgPlanetSurface from '../assets/geology-uranus.png'
import PlanetDescription from "../component/PlanetDescription"
import PlanetCharacteristics from "../component/PlanetCharacteristics"
import data from "../data.json"

export default function Uranus() {
  const screenWidth = useSelector(state => state.appState.screenWidth)
  const [pageStatus, setPageStatus] = React.useState('overview')
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
      <main className="planet-uranus">
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
      planetName={uranus.name}
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
      rotationTime={uranus.rotation}
      revolutionTime={uranus.revolution}
      radius={uranus.radius}
      temperature={uranus.temperature}
    />
  </main>
  )
}