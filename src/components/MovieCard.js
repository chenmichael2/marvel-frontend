import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
        return (
            <div className="movie-card">
                <img className="poster" src={this.props.posterURL} />
                <div className="movie-title">{this.props.title}</div>
                <p className="movie-release">{this.props.date}, {this.props.year}</p>
            </div>
        )
    }
}

export default MovieCard;