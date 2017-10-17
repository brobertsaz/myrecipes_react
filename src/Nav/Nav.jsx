import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu inverted>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name='myRecipes'
            active={activeItem === 'myRecipes'}
            onClick={this.handleItemClick}
          >
            My Recipes
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Nav;