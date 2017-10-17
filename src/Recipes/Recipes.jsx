import React, { Component } from 'react';
import { Card, Image, Button, Label } from 'semantic-ui-react'

class Recipes extends Component {
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
    const { recipes } = this.state

    return (
      <div>
        <Card.Group itemsPerRow={4}>
        {recipes.map((recipe, i) => (
          <Card color='red' key={i}>
          <Image src={recipe.image} />
          <Card.Content>
            <Card.Header>{recipe.label}</Card.Header>
            <Card.Meta>{recipe.source}</Card.Meta>
            <Card.Description>{recipe.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>Calories <Label color='red'>{recipe.calories}</Label></p>
            <p>Yields <Label color='green'>{recipe.yield}</Label></p>
            <div className='ui two buttons'>
              <Button basic color='green'>Favorite</Button>
              <Button basic color='blue'>View</Button>
            </div>
          </Card.Content>
          </Card>
        ))}
        </Card.Group>
      </div>
    );
  }
}

export default Recipes;