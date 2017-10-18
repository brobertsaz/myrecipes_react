import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Recipes from './Recipes/Recipes'
import Login from './Login/Login'
import Nav from './Nav/Nav'
import 'semantic-ui-css/semantic.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>, document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept()
}