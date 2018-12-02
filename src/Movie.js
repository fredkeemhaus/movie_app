import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>Hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiT042S3YHfAhWCPXAKHeJKBcIQjRx6BAgBEAU&url=http%3A%2F%2Fharrypotter.wikia.com%2Fwiki%2FFantastic_Beasts%3A_The_Crimes_of_Grindelwald&psig=AOvVaw0BQ4MCNv5vDYt0uTTTgz3b&ust=1543860084754878" />
        )
    }
}

export default Movie;