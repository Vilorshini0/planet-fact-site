import { Link } from "react-router-dom"
import data from "../data.json"

export default function HeaderDesktop() {
    return (
        <header>
            <h1>THE PLANETS</h1>
            <nav>
                <ul>
                    {data.map((planet, index) => {
                        return (
                            <li key={index}>
                                <Link className={`nav-link ${planet.name}`} to={planet.url}> 
                                    <h2>{planet.name}</h2>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}