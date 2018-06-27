import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movieList';
// import Search from './components/search';
import $ from 'jquery'; 


class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      movies : []
    }

    
    this.handleChange = this.handleChange.bind(this);
    // this.searchMovie = this.searchMovie;
  }


  handleChange(e){
    e.preventDefault()
    const searchTerm = e.target.value
    
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
       const results = searchResults.results
        // console.log(results[0])

        const movie = {
          title: results[0].title,
          description: results[0].overview,
          poster_path: "https://www.themoviedb.org/movie/" + results[0].id,
          poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + results[0].poster_path
          
        }
        const movies = []; 
        movies.push(movie);
        this.setState({movies: movies})
        console.log(movie);
        // console.log(movie.image)
      }, error: (xhr, status, err) => {
        console.error("Failed to fetch data")
        } 
      })
  }


  render() {
    // console.log(this.state.searchMovie);
    return (
      <div className="App">
        <div className="header"> </div>
     
        <div > 
          <form className="search">
           <input type="text" name="movie" placeholder="Search for a movie" onChange={this.handleChange} className="searchBar"/> 
          </form>
        </div>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;


// https://image.tmdb.org/t/p/w600_and_h900_bestv2/8RLEzftZK87S2usLsQoYtyNYzoV.jpg