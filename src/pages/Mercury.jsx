import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-mercury.svg'
import PlanetDescription from "../component/PlanetDescription";
import data from "../data.json"

export default function Mercury() {
    const screenWidth = useSelector(state => state.appState.screenWidth)

    return (
        <main className="planet-mercury planet-page">
            {screenWidth}
            <img src={imgPlanet} alt="" />
            <PlanetDescription planetName={data[0].name} description={data[0].overview.content} source={data[0].overview.source}/>
        </main>
    )
}