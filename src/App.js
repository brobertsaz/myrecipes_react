import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recipes: []
    }
    this.getRecipes = this.getRecipes.bind(this)
  }

  componentDidMount() {
    this.getRecipes()
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getRecipes () {
    this.fetch('recipes')
      .then(recipes => {
        this.setState({recipes: recipes})
      })
  }

  render() {
    return (
      <div className="App">
          {this.state.recipes.map((recipe, i) => (
            <h4 key={i}>{ recipe.url }</h4>
          ))}
      </div>
    );
  }
}

export default App;
