import React from "react";
import { useSelector } from "react-redux"
import imgPlanet from '../assets/planet-venus.svg'
import imgPlanetInternal from '../assets/planet-venus-internal.svg'
import PlanetDescription from "../component/PlanetDescription";
import PlanetCharacteristics from "../component/PlanetCharacteristics";
import data from "../data.json"
  
  export default function Venus() {
    const screenWidth = useSelector(state => state.appState.screenWidth)
    const [myPlanetImage, setMyPlanetImage] = React.useState(imgPlanet)

    function changeToOverview() {
      setMyPlanetImage(imgPlanet)
    }

    function changeToInternalStructure() {
      setMyPlanetImage(imgPlanetInternal)
    }

    return (
        <main className="planet-venus">
            {screenWidth}
            <img src={myPlanetImage} alt="" />
            <PlanetDescription planetName={data[1].name} description={data[1].overview.content} source={data[1].overview.source}/>
            <button onClick={changeToOverview}>Overview</button>
            <button onClick={changeToInternalStructure}>Internal Structure</button>
            <PlanetCharacteristics rotationTime={data[1].rotation} revolutionTime={data[1].revolution} radius={data[1].radius} temperature={data[1].temperature}/>
        </main>
    )
}