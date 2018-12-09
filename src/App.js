import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component
  state = {
    greeting: 'Hello',
    movies : [
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
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Aqua Man",
            poster: "http://img09.deviantart.net/3d97/i/2016/130/f/a/aquaman_2016_movie_poster_by_edaba7-d9fhens.jpg"
          }
        ]
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
