import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class Login extends Component {
  render() {
    return (
      <div className="container">
        <Grid centered columns={3}>
          <Grid.Column>
            <div className="ui middle aligned center aligned grid">
              <div className="column">
                <h2 className="ui black image header">
                  <div className="content">
                    Login
                  </div>
                </h2>
                <form className="ui large form">
                  <div className="ui stacked segment">
                    <div className="field">
                      <div className="ui left icon input">
                        <i className="user icon"></i><input name="email" placeholder="E-mail address" type="text" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="ui left icon input">
                        <i className="lock icon"></i><input name="password" placeholder="Password" type="password" />
                      </div>
                    </div>
                    <div className="ui fluid large black submit button">
                      Login
                    </div>
                  </div>
                  <div className="ui error message"></div>
                </form>
                <div className="ui message">
                  New to us?<a href="login.html#"> Sign Up</a>
                </div>
              </div>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;