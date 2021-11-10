import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Time Recording System
                </Link>
                <div>
                    <Link to="/time/add" className="btn btn-light ml-auto">Submit Time</Link>
                </div>
            </div>
        </nav>
    )
}
