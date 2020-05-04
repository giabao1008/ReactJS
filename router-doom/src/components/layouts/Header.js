import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                                {/* <a className="nav-link" href="#">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                                {/* <a className="nav-link" href="#">About</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                                {/* <a className="nav-link" href="#">Contact</a> */}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        )
    }
}
