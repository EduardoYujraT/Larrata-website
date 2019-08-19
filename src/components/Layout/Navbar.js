import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
            Larrata Files
           {/* <img src={logo} alt="logo" style={{ width: '35px' }} /> */}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <Link className="nav-link text-uppercase ml-5" to="/">Reglamento</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-uppercase ml-5" to="/miembros">Miembros</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-uppercase ml-5" to="/issues">Issues</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-uppercase ml-5" href="https://github.com/matiasalbacetti/LarrataFiles/issues/new">New Issue</a>
                </li>
            </ul>
        </div>
  </nav>
    )
}
