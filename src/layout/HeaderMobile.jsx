import React from "react";
import { Link } from "react-router-dom"
import data from "../data.json"
import burgerIcon from '../assets/icon-hamburger.svg'
import chevronIcon from '../assets/icon-chevron.svg'

export default function HeaderMobile() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    function handleToggleMenu(){
        setIsMenuOpen(previous => !previous)
    }

    return (
        <header>
            <h1>THE PLANETS</h1>

            <button onClick={handleToggleMenu}>
                <img src={burgerIcon} />
            </button>

            {isMenuOpen && 
                <nav>
                    <ul>
                        {/* Loop on data to generate navigation */}
                        {data.map((planet, index) => {
                            return (
                                <li key={index}>
                                    <Link className={`nav-link ${planet.name}`} to={planet.url}>
                                        <div className="color-dot"></div>
                                        <h2>{planet.name}</h2>
                                        <img src={chevronIcon} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            }
        </header>
    )
}