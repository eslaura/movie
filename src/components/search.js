import React, { Component } from 'react';
import $ from 'jquery'; 

class Search extends Component {
  constructor(props){
    super(props);

    this.state= {
      movie: {}
    }

    this.handleChange = this.handleChange.bind(this);
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
          image: "image"
        }
        this.props.onChange(movie);
        console.log(movie)
}})}


  render() {
    return (
    
        <div > 
          <form className="search">
           <input type="text" name="movie" placeholder="Search for a movie" onChange={this.handleChange} className="searchBar"/> 
          </form>
        </div>

    );
  }
}

export default Search;

