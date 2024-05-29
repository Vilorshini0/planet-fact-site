import { NavLink } from "react-router-dom"
import data from "../data.json"

export default function HeaderDesktop() {
    return (
        <header className="header-desktop">
            <h1  className="header-desktop__title">THE PLANETS</h1>
            <nav className="header-desktop__nav">
                <ul>
                    {data.map((planet, index) => {
                        return (
                            <li key={index}>
                                <NavLink className='nav-link' to={planet.url}> 
                                    <span className={planet.name}></span>
                                    <h2>{planet.name}</h2>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}