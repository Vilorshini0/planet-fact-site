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
        <header className="header-mobile">
            <h1 className="header-mobile__title">THE PLANETS</h1>

            <button 
                onClick={handleToggleMenu} 
                className={`header-mobile__burger-btn ${isMenuOpen ? 'header-mobile__burger-btn--active' : ''}`}
            >
                <img src={burgerIcon} />
            </button>

            {isMenuOpen && 
                <nav className="header-mobile__nav">
                    <ul>
                        {/* Loop on data to generate navigation */}
                        {data.map((planet, index) => {
                            return (
                                <li key={index}>
                                    <Link className="nav-link" to={planet.url} onClick={() => setIsMenuOpen(false)}>
                                        <div className={`color-dot ${planet.name}`}></div>
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