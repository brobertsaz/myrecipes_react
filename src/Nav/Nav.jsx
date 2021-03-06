import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

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
            as={Link}
            to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            to='recipes'
            name='myRecipes'
            active={activeItem === 'myRecipes'}
            onClick={this.handleItemClick}
          >
            My Recipes
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              as={Link}
              to='login'
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick} />
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Nav;