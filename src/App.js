import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Grindelwald Crimes",
  "Ready Player One",
  "Bohemian Rhapsody",
  "Upgrade"
]

const movieImages = [
  "http://www.gstatic.com/tv/thumb/movieposters/13663846/p13663846_p_v8_ag.jpg",
  "http://www.gstatic.com/tv/thumb/v22vodart/12806300/p12806300_v_v8_ac.jpg",
  "http://www.gstatic.com/tv/thumb/v22vodart/15444050/p15444050_v_v8_as.jpg",
  "https://static1.squarespace.com/static/511eea22e4b06642027a9a99/t/5b760d2b898583cd4bf82f6a/1534463280060/Upgrade.jpg"


]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
