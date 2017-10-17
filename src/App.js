import React, { Component } from 'react';
import './App.css'
import Nav from './Nav/Nav'
import Recipes from './Recipes/Recipes'
import { Container } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <Recipes />
        </Container>
      </div>
    );
  }
}

export default App;
