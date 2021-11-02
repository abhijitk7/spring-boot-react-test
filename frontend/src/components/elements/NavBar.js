import React from 'react'

export default function NavBar() {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">
                    Time Recording System
                </a>
                <div>
                    <a href="#" className="btn btn-light ml-auto">Submit Time</a>
                </div>
            </div>
        </nav>
    )
}
