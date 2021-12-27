import React, { Component } from 'react';

import Home from './components/Home';
import Movie from './components/Movie'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/movie" element={<Movie/>} />
        </Routes>
      </Router>
    )
  }
}

export default App;
