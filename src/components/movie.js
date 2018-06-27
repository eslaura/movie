import React, { Component } from 'react';


class Movie extends Component {
  render() {
  	
    return (


			<div className="movie">
            <h3>{this.props.movie.title}</h3>
	            <div className="movieContent">
		            <a href={this.props.movie.poster_path} ><img alt="poster" src={this.props.movie.poster} className="image"/></a>
		            <p className="description">{this.props.movie.description}</p>
	            </div>
          </div>
		)
	}
}

export default Movie;


