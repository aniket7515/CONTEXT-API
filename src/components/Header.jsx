import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <span>React context</span>
        <ul className="nav">
            <li className="prod">
                <Link to="/">Home Page</Link>
            </li>
            <li className="prod1">
                <Link to="/cart">Cart Page</Link>
            </li>
        </ul>
    </>
    

  )
}

export default Header