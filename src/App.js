import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './components/Home';
// import Movie from './components/Movie';

class App extends Component {
  render() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/movie" element={<Movie/>} /> */}
        </Routes>
      </Router>
    )
  }
}

export default App;
