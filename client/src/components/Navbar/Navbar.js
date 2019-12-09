import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/history">History</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar