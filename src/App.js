import React, { Component } from 'react';
import { Card, Icon, Image, Container, Button } from 'semantic-ui-react'

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
        <Container>
          <Card.Group itemsPerRow={4}>
          {this.state.recipes.map((recipe, i) => (
            <Card color='red' key={i}>
            <Image src={recipe.image} />
            <Card.Content>
              <Card.Header>{recipe.label}</Card.Header>
              <Card.Meta>{recipe.source}</Card.Meta>
              <Card.Description>{recipe.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Calories {recipe.calories}</p>
              <p>Yields {recipe.yield}</p>
              <div className='ui two buttons'>
                <Button basic color='green'>Favorite</Button>
                <Button basic color='blue'>View</Button>
              </div>
            </Card.Content>
            </Card>
          ))}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;
