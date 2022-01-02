import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="../">
                                    <img src="data:image/png;base64,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" alt="Logo" />
                                </a>
                                <span className="navbar-burger burger" data-target="navbarMenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div id="navbarMenu" className="navbar-menu">
                                <div className="navbar-end">
                                    <div className="tabs is-right">
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li className="is-active"><a href="/movie">Movies</a></li>
                                            <li><a href="">TV Shows</a></li>
                                            <li><a href="">Characters</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="heading-container">
                        <div className="heading-section">
                            <img className="center-picture" src="https://www.gannett-cdn.com/presto/2021/01/07/USAT/0d87949b-7f95-4318-a7f7-72f2b6893d05-marvel-shows.png"
                                alt="marvel center picture" />
                            <div className="body-text">
                                <h1>Movies</h1>
                                <p className="paragraph-text">All movies in the MCU</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movies">
                
                </div>
                <footer>
                    <h1>This is not an official Disney website.</h1>
                </footer>
            </div>
        )
    }
}

export default Movie;