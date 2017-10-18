import React, { Component } from 'react';
import './App.css'
import { Container, Search, Grid } from 'semantic-ui-react'

const DEFAULT_QUERY = 'chicken'

const PATH_BASE = 'https://api.edamam.com'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'q='
const APP_ID = '8f515798'
const API_KEY = '270bd7a2a9c99e07de6c6bbb2c411d9e'


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      results: null,
      searchTerm: DEFAULT_QUERY
    }

    this.setSearchTopRecipes = this.setSearchTopRecipes.bind(this)
    this.fetchSearchTopRecipes = this.fetchSearchTopRecipes.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  componentDidMount() {
    const { searchTerm } = this.state
    // this.fetchSearchTopRecipes(searchTerm)
  }

  fetchSearchTopRecipes(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}`)
      .then(response => response.json())
      .then(result => this.setSearchTopRecipes(result))
      .catch(e => e)
  }

  onSearchChange() {

  }

  onSearchSubmit() {

  }

  setSearchTopRecipes(result) {
    this.setState({ result })
    console.log(result)
  }

  render() {
    const { searchTerm, isLoading } = this.state
    return (
      <div className="App">
        <Container>
          <Grid>
            <Grid.Column width={8}>
              <Search
                loading={isLoading}
                value={searchTerm}
                onChange={this.onSearchChange}
                onSubmit={this.onSearchSubmit}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
