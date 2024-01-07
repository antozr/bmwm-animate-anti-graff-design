import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Root() {
  return (
    <>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__el">
                    <NavLink to="/csl" aria-label='Se rendre sur la page de la CSL' >
                      CSL, firt bmw M 
                    </NavLink>
                </li>
                <li className="nav__el"></li>
            </ul>
        </nav>
    </>
  )
}

export default Root