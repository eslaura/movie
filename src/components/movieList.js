import React, { Component } from 'react';
import Movie from './movie'

class MovieList extends Component {

  render() {

    let movies

    if(this.props.movies){
      movies = this.props.movies.map(movie => {
      return ( <Movie key={movie.id} movie={movie}  /> )
    });
  }

    return (
      <div>
        <ul className="list">
          {movies}
        </ul>
      </div>
    );
  }
}

export default MovieList;
