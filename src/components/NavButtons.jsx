import React from 'react'
import { NavLink } from 'react-router-dom'

function NavButtons() {
  return (
    <div>
        <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
        </div>
        <div className="btn-container">
        <NavLink className="filter-btn" to='/'>All</NavLink>
        <NavLink className="filter-btn" to='/breakfast'>Breakfast</NavLink>
        <NavLink className="filter-btn" to='/lunch'>Lunch</NavLink>
        <NavLink className="filter-btn" to='/shakes'>Shakes</NavLink>
        </div>
    </div>
    
  )
}

export default NavButtons