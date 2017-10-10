import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to ='/' className="navbar-brand">WebSiteName</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><Link to='/'>Home</Link></li>
        <li><Link to='/morning'>Morning Projects</Link></li>
      </ul>
    </div>
  </nav>
)

export default Header
