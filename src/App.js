import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Grindelwald Crimes",
    poster: "http://www.gstatic.com/tv/thumb/movieposters/13663846/p13663846_p_v8_ag.jpg"
  },
  {
    title: "Ready Player One",
    poster: "http://www.gstatic.com/tv/thumb/v22vodart/12806300/p12806300_v_v8_ac.jpg"
  },
  {
    title: "Bohemian Rhapsody",
    poster: "http://www.gstatic.com/tv/thumb/v22vodart/15444050/p15444050_v_v8_as.jpg"
  },
  {
    title: "Upgrade",
    poster: "https://static1.squarespace.com/static/511eea22e4b06642027a9a99/t/5b760d2b898583cd4bf82f6a/1534463280060/Upgrade.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
