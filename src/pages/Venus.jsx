import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-venus.svg'
import PlanetDescription from "../component/PlanetDescription";
import data from "../data.json"
  
  export default function Venus() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    return (
        <main className="planet-venus">
            {screenWidth}
            <img src={imgPlanet} alt="" />
            <PlanetDescription planetName={data[1].name} description={data[1].overview.content} source={data[1].overview.source}/>
        </main>
    )
}