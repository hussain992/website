import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from 'styled-components';
import APP_THEME from './theme'
import NavBarContainer from './Components/NavBarContainer';
import Banner from './Components/Banner';
import ArtCake from './Components/ArtCake';
import Pancakes from './Components/Pancakes';
import Breakfast from './Components/Breakfast';
import Sandwich from './Components/Sandwich';




class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <ThemeProvider theme={APP_THEME}>
        <div>
          {/* <NavBarContainer/> */}
          {/* <Banner/> */}
          {/* <ArtCake/> */}
          {/* <Pancakes/> */}
          {/* <Breakfast/> */}
          <Sandwich/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
